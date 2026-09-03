<?php
/**
 * Rayashree Weaving Pvt. Ltd. - Hostinger PHP Form Handler & Email Notification
 * Compatible with Hostinger Shared, Cloud, and VPS Hosting (PHP 7.4 - 8.3+)
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Receive payload (JSON or Form POST)
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$clientName   = isset($data['clientName']) ? trim(strip_tags($data['clientName'])) : '';
$phone        = isset($data['phone']) ? trim(strip_tags($data['phone'])) : '';
$email        = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$product      = isset($data['product']) ? trim(strip_tags($data['product'])) : '';
$quantity     = isset($data['quantity']) ? trim(strip_tags($data['quantity'])) : 'Standard Minimum Order';
$specs        = isset($data['specifications']) ? trim(strip_tags($data['specifications'])) : '';

if (empty($clientName) || empty($phone)) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Name and Phone number are required fields.'
    ]);
    exit;
}

// 1. Log Inquiry to a secure local file on Hostinger
$inquiryRecord = [
    'id'             => 'RW-' . rand(1000, 9999),
    'date'           => date('Y-m-d H:i:s'),
    'clientName'     => $clientName,
    'phone'          => $phone,
    'email'          => $email,
    'product'        => $product,
    'quantity'       => $quantity,
    'specifications' => $specs,
    'status'         => 'New',
    'ip'             => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
];

$storageDir = __DIR__ . '/../data';
if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0755, true);
}

$dataFile = $storageDir . '/inquiries.json';
$existingInquiries = [];
if (file_exists($dataFile)) {
    $existingInquiries = json_decode(file_get_contents($dataFile), true) ?: [];
}
array_unshift($existingInquiries, $inquiryRecord);
@file_put_contents($dataFile, json_encode($existingInquiries, JSON_PRETTY_PRINT));

// 2. Dispatch Email Alert to CEO / Management via Hostinger Native Mail
$recipient = 'rayashreewpvtltd@gmail.com';
$subject = "New Inquiry from {$clientName} - [{$inquiryRecord['id']}]";

$messageBody = "
=====================================================
NEW PUBLIC WEBSITE INQUIRY / RFQ
Rayashree Weaving Pvt. Ltd.
=====================================================

Inquiry ID: {$inquiryRecord['id']}
Date/Time:  {$inquiryRecord['date']}

Client Name:    {$clientName}
Contact Phone:  {$phone}
Email Address:  {$email}
Product Line:   {$product}
Estimated Qty:  {$quantity}

Custom Specifications / Notes:
{$specs}

Direct WhatsApp Contact:
https://wa.me/" . preg_replace('/[^0-9]/', '', $phone) . "

=====================================================
This inquiry was submitted on your Hostinger website.
";

$headers = [
    'From'         => 'no-reply@' . ($_SERVER['SERVER_NAME'] ?? 'rayashreeweaving.com'),
    'Reply-To'     => !empty($email) ? $email : 'rayashreewpvtltd@gmail.com',
    'X-Mailer'     => 'PHP/' . phpversion()
];

$mailSent = @mail($recipient, $subject, $messageBody, $headers);

echo json_encode([
    'success'    => true,
    'inquiryId'  => $inquiryRecord['id'],
    'mailSent'   => $mailSent,
    'message'    => 'Thank you! Your quotation request has been submitted successfully to Rayashree Weaving.'
]);
