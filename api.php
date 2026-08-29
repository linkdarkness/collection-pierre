<?php
// Permet l'accès depuis votre page web
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

// Désactive le temps de réponse maximal si l'API est lente
set_time_limit(30);

$affiliate_tag = isset($_GET['track']) ? $_GET['track'] : 'default';
$url = "https://chaturbate.com/api/public/affiliates/onlinemodels/?wm=" . urlencode($affiliate_tag) . "&limit=20";

// Utilisation de cURL pour récupérer les données côté serveur
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)');

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code === 200 && $response) {
    echo $response;
} else {
    http_response_code(500);
    echo json_encode(["error" => "Impossible de récupérer les données Chaturbate."]);
}
?>
