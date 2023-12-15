<?php

namespace App\Http\Controllers;

use App\Models\Pessoas as ModelsPessoas;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Pessoas extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(ModelsPessoas::all());
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

        $pessoa = DB::transaction(function() use($dados){
            return $pessoa = ModelsPessoas::create($dados);
        });

        return response()->json($pessoa);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ModelsPessoas $pessoa)
    {
        return response()->json($pessoa);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ModelsPessoas $pessoa)
    {
        $dados = $request->input();

        $pessoa = DB::transaction(function() use($dados, $pessoa){
            return $pessoa->update($dados);
        });

        return response()->json($pessoa);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ModelsPessoas $pessoa)
    {
        $pessoa->delete();
    }
}
