<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;

class ModuleController extends Controller
{
    public function store(Request $request)
    {
        $dados = $request->input();

        try {
            DB::beginTransaction();

            if(!empty($dados["createTable"])){
                $this->createTableMigration($dados['moduleTable'] ?? $dados['moduleName']);
            }

            if(!empty($dados["createModel"])){
                $this->createModel($dados['moduleModel'] ?? $dados['moduleName']);
            }

            if(!empty($dados["createController"])){
                $this->createController(
                    $dados['moduleControl'] ?? $dados['moduleName'],
                    $dados['arg'] ?? '',
                    !empty($dados['test'])
                );
            }

            DB::commit();
            return response()->json(["Módulo criado com sucesso!"], 201);
        }catch(\Exception $e){
            DB::rollBack();
            return response()->json(["Erro: {$e->getMessage()}"], 201);
        }
    }

    
    public function createTableMigration(string $nome){
        $tableNome = str_replace(" ", "_", trim(strtolower($nome)));
        $ableDirName = str_replace(" ", "", trim(ucwords($nome)));
        $command = "make:migration CreateTable{$ableDirName} --create={$tableNome}";
        Artisan::call($command);
    }

    public function alterTableMigration(string $nome){
        $tableNome = str_replace(" ", "_", trim(strtolower($nome)));
        $ableDirName = str_replace(" ", "", trim(ucwords($nome)));

        $command = "make:migration AlterTable{$ableDirName} --table={$tableNome}";
        Artisan::call($command);
    }

    private function createController(string $nome, string $arg = '', bool $teste = false)
    {
        $args = [
            'api',
            'resource'
        ];

        $controler = str_replace(" ", "", trim(ucwords(str_replace(["-", '_'], [" ", " "],$nome))));
                
        $command = "make:controller {$controler}Controller";

        if(in_array($arg, $args)){
            $command .= " --{$arg}";
        }

        if($teste){
            $command .= " --test";
        }
        
        Artisan::call($command);
    }

    private function createModel(string $nome)
    {
        $model = str_replace(" ", "", trim(ucwords(str_replace(["-", '_'], [" ", " "],$nome))));
        
        $command = "make:model {$model}Model";
        Artisan::call($command);
    }
}



