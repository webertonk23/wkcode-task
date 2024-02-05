<?php

namespace App\Http\Controllers;

use App\Models\SprintsModel;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SprintsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(SprintsModel::all(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dados = $request->input();

        SprintsModel::create($dados);
        
        return response()->json(['Criado com sucesso'], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(SprintsModel $sprint)
    {
        return response()->json($sprint, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SprintsModel $sprint)
    {
        $dados = $request->input();

        $sprint->update($dados);
        
        return response()->json(["Alterado com sucesso"], Response::HTTP_ACCEPTED);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SprintsModel $sprint)
    {
        $sprint->delete();
        
        return response()->json(['deletado com sucesso'], Response::HTTP_ACCEPTED);
    }
}
