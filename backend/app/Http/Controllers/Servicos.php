<?php

namespace App\Http\Controllers;

use App\Models\Servicos as ModelsServicos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Servicos extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ModelsServicos::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $servico = DB::transaction(function() use($request){
            return ModelsServicos::created($request->input());
        });

        return response()->ok();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ModelsServicos $servico)
    {
        return $servico->json();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ModelsServicos $servico)
    {
        $servivo = DB::transaction(function() use($request, $servico){
            return $servico->update($request->input());
        });

        return response()->ok();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ModelsServicos $servico)
    {
        $servico->delete();
        
        return response()->ok();
    }
}
