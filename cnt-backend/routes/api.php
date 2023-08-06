<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([ 'middleware' => 'cors'], function() {
Route::get('/', [ContactsController::class, "show"]);
Route::post('/add', [ContactsController::class, "add"]);
Route::post('/edit/{id}', [ContactsController::class, 'edit']);
Route::get('/delete/{id}', [ContactsController::class, 'deleteContact']);
});