<?php
/**
 * Rayashree Weaving Pvt. Ltd. - Hostinger Products API Endpoint
 * Handles GET (fetch all products) and POST (save/update products)
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$dataFile = __DIR__ . '/../data/products.json';
$storageDir = __DIR__ . '/../data';

if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0755, true);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        echo $content ?: '[]';
    } else {
        echo '[]';
    }
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $rawInput = file_get_contents('php://input');
    $products = json_decode($rawInput, true);

    if (!is_array($products)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid product payload']);
        exit;
    }

    $saved = @file_put_contents($dataFile, json_encode($products, JSON_PRETTY_PRINT));

    if ($saved !== false) {
        echo json_encode([
            'success' => true, 
            'count'   => count($products),
            'message' => 'Products saved and published live on server'
        ]);
    } else {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to write data file']);
    }
    exit;
}

http_response_code(405);
echo json_encode(['success' => false, 'message' => 'Method not allowed']);
