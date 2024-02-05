<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PessoasModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'pessoas';

    protected $fillable = [
        'nome',
        'cpf',
        'logradouro',
        'numero',
        'complemento',
        'bairro',
        'cidade',
        'uf', 
        'cep',
        'telefones',
        'email',
    ];

    protected $casts = [
        'telefones' =>'json'
    ];
}
