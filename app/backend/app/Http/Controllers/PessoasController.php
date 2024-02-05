<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreatePessoasRequest;
use App\Models\PessoasModel;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PessoasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(PessoasModel::all(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreatePessoasRequest $request)
    {
        $dados = $request->validated();

        PessoasModel::create($dados);
        
        return response()->json(['Criado com sucesso!'], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(PessoasModel $pessoa)
    {
        return response()->json($pessoa, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CreatePessoasRequest $request, PessoasModel $pessoa)
    {
        $dados = $request->validated();

        $pessoa->update($dados);
        
        return response()->json(['Alterado com sucesso!'], Response::HTTP_NO_CONTENT);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PessoasModel $pessoa)
    {
        $pessoa->delete();
        
        return response()->json(PessoasModel::all(), Response::HTTP_NO_CONTENT);
    }
}
