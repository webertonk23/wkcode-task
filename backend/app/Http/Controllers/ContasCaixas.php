<?php

namespace App\Http\Controllers;

use App\Models\ContasCaixas as ModelsContasCaixas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ContasCaixas extends Controller
{
    /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function index()
   {
       return ModelsContasCaixas::all();
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
   public function store(Request $request)
   {
       $contaCaixa = DB::transaction(function() use($request){
           return ModelsContasCaixas::created($request->input());
       });

       return response()->ok();
   }

   /**
    * Display the specified resource.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function show(ModelsContasCaixas $contaCaixa)
   {
       return $contaCaixa->json();
   }

   /**
    * Update the specified resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function update(Request $request, ModelsContasCaixas $contaCaixa)
   {
       $servivo = DB::transaction(function() use($request, $contaCaixa){
           return $contaCaixa->update($request->input());
       });

       return response()->ok();
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  int  $id
    * @return \Illuminate\Http\Response
    */
   public function destroy(ModelsContasCaixas $contaCaixa)
   {
       $contaCaixa->delete();
       
       return response()->ok();
   }
}
