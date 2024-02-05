<?php

namespace App\Http\Controllers;

use App\Models\ProjetosModel;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ProjetosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(ProjetosModel::all(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dados = $request->validate([
            'titulo' => 'required',
            'descricao' => 'nullable',
        ]);

        ProjetosModel::create($dados);
        
        return response()->json(["Criado com sucesso"], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(ProjetosModel $projeto)
    {
        return response()->json($projeto, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProjetosModel $projeto)
    {
        $dados = $request->validate([
            'titulo' => 'required',
            'descricao' => 'nullable',
        ]);

        $projeto->update($dados);
        
        return response()->json(["alterado com sucesso"], Response::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProjetosModel $projeto)
    {
        $projeto->delete();
        
        return response()->json(["deletado com sucesso"], Response::HTTP_ACCEPTED);
    }
}
