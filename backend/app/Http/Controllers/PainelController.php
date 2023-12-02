<?php

namespace App\Http\Controllers;

use App\Models\PainelModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PainelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['data' => PainelModel::all()]);
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

        $painel = DB::transaction(function() use($dados){
           return PainelModel::create($dados);
        });


        $data = $painel ? [
            'mensage' => [
                'title' => 'Sucesso!',
                'icon' => 'success',
                'text' => 'Painel criado com sucesso!'
            ],
            'dados' => $painel
        ] : [
            'mensage' => [
                'title' => 'Falha!',
                'icon' => 'error',
                'text' => 'Não foi possivel criar o painel!'
            ],
            'dados' => $painel
        ];

        return response(201)->json($data);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(PainelModel $painel)
    {
        return response()->json($painel);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PainelModel $painel)
    {
        $dados = $request->input();

        $painel = DB::transaction(function() use($dados, $painel){
           return  $painel->update($dados);
        });

        $data = $painel ? [
            'mensage' => [
                'title' => 'Sucesso!',
                'icon' => 'success',
                'text' => 'Painel alterado com sucesso!'
            ],
            'dados' => $painel
        ] : [
            'mensage' => [
                'title' => 'Falha!',
                'icon' => 'error',
                'text' => 'Não foi possivel alterar o painel!'
            ],
            'dados' => $painel
        ];

        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, PainelModel $painel)
    {
        $painel = DB::transaction(function() use($painel){
           return  $painel->delete();
        });

        $data = $painel ? [
            'mensage' => [
                'title' => 'Sucesso!',
                'icon' => 'success',
                'text' => 'Painel deletado com sucesso!'
            ],
            'dados' => $painel
        ] : [
            'mensage' => [
                'title' => 'Falha!',
                'icon' => 'error',
                'text' => 'Não foi possivel deletar o painel!'
            ],
            'dados' => $painel
        ];

        return response()->json($data);
    }
}
