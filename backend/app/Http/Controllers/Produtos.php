<?php

namespace App\Http\Controllers;

use App\Models\Produtos as ModelsProdutos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Produtos extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ModelsProdutos::all()->json();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $produto = DB::Transaction(function() use($request){
            return ModelsProdutos::created($request->input());
        });

        return response()->ok();

        return $produto->json();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ModelsProdutos $produto)
    {
        return $produto->json();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ModelsProdutos $produto)
    {
        $produto = DB::transaction(function() use($request, $produto){
            return $produto->update($request->input());
        });

        return response()->ok();

        return $produto->json();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ModelsProdutos $produto)
    {
        $produto->delete();

        return response()->ok();
    }
}
