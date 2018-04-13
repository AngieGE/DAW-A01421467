<?php
//Bringing in the request and response object
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

//Reated by composer
require '../vendor/autoload.php';

//Creating the main slim object
$app = new \Slim\App;


//Create a route for a get request
$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});

//Customers php
require '../src/routes/customers.php';


$app->run();