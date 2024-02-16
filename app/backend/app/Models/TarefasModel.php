<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TarefasModel extends Model
{
    use HasFactory, SoftDeletes;

    protected $table="tarefas";

    protected $fillables = [
        'titulo',
        'descricao',
        'inicio',
        'fim',
        'inicio_previstto',
        'fim_previsto',
        'duracao_prevista',
        'duracao',
        'status_id',
        'situacao',
        'pessoa_id',
        'formulario',
    ];

    protected $casts = [
        'inicio' => 'datetime', 
        'fim' => 'datetime',
        'inicio_previstto' => 'datetime',
        'fim_previsto' => 'datetime',
    ];

    public function getSituacao($value = null){
        $data = [
            'aguardando' => 'Aguardando',
            'executando' => "Em execução",
            'concluido' => 'Concluido'
        ];

        return $value ? $data[$value] : $data;
    }

}
