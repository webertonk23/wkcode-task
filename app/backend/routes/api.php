<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
});

Route::middleware(['auth:api'])->group(function () {
    Route::apiResource('status', 'StatusController')->names('api.status')->parameters([
        'status' => 'status'
    ]);

    Route::apiResource('pessoas', 'PessoasController')->names('api.pessoas')->parameters([
        'pessoas' => 'pessoa'
    ]);

    Route::apiResource('projetos', 'ProjetosController')->names('api.projetos')->parameters([
        'projetos' => 'projeto'
    ]);

    Route::apiResource('sprints', 'SprintsController')->names('api.sprints')->parameters([
        'sprints' => 'sprint'
    ]);
});
