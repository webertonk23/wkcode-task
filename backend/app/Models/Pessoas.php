<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Pessoas extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'pessoas';

    protected $fillable = [
        'id',
        'nome',
        'cpf_cnpj',
        'tipo',
        'data_nascimento',
        'sexo',
        'telefone1',
        'telefone2',
        'telefone3',
        'email',
        'endereco',
        'numero',
        'complemento',
        'bairro',
        'cidade',
        'uf',
        'cep',
        'cliente',
        'fornecedor',
        'funcionario',        
    ];

    protected $casts = [
        'cliente' => 'boolean',
        'fornecedor' => 'boolean',
        'funcionario' => 'boolean',
        'data_nascimento' => 'date'
    ];

    public function getTipoPessoa($value = null){
        $tipo = [
            'f' => 'Pessoa fisica',
            'j' => 'Pessoa juridica',
        ];
        
        if(!empty($value)){
            return $tipo[$value];
        }else{
            return $tipo;
        }
    }

    public function getSexoPessoa($value = null){
        $sexo = [
            'm' => 'Masculino',
            'f' => 'Feminino',
        ];
        
        if(!empty($value)){
            return $sexo[$value];
        }else{
            return $sexo;
        }
    }


}
