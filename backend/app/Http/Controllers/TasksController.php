<?php

namespace App\Http\Controllers;

use App\Models\TasksModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TasksController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $dados['situacao'] = 'aguardando_inicio'; 

        $task = DB::transaction(function() use($dados){
           return TasksModel::create($dados);
        });


        $data = $task ? [
            'mensage' => [
                'title' => 'Sucesso!',
                'icon' => 'success',
                'text' => 'Painel criado com sucesso!'
            ],
            'dados' => $task
        ] : [
            'mensage' => [
                'title' => 'Falha!',
                'icon' => 'error',
                'text' => 'Não foi possivel criar o painel!'
            ],
            'dados' => $task
        ];

        return response()->json($data);
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
