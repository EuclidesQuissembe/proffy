<?php

ob_start();

require __DIR__ . "/vendor/autoload.php";

$router = new \CoffeeCode\Router\Router(url());

// Namespace
$router->namespace("Source\App");

/**
 * Web Routes
 */
$router->group(null);
$router->get("/", "Web:home");

/**
 * Error routes
 */
$router->group("ops");
$router->get("/{code}", "Web:error");

/**
 * Error
 */
if ($router->error()) {
    $router->redirect("/ops/{$router->error()}");
}

ob_end_flush();