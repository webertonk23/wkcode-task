<?php

namespace App\Http\Controllers;

use App\Models\CategoriasModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CategoriasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categorias = CategoriasModel::all();

        return response()->json(['data' => $categorias]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dados = $request->input();

        $categoria = DB::transaction(function() use($dados){
           return CategoriasModel::create($dados);
        });


        $data = $categoria ? [
            'mensage' => [
                'title' => 'Sucesso!',
                'icon' => 'success',
                'text' => 'Categoria criada com sucesso!'
            ],
            'dados' => $categoria
        ] : [
            'mensage' => [
                'title' => 'Falha!',
                'icon' => 'error',
                'text' => 'Não foi possivel criar o categoria!'
            ],
            'dados' => $categoria
        ];

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
