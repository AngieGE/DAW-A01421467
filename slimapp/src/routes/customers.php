<?php
//Bringing in the request and response object
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//Creating the main slim object
$app = new \Slim\App;

//get customers
$app ->get('/api/customers', function(Request $request, Response $response){
    echo 'CUSTOMERS';
}); 