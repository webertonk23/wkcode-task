<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Produtos extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'produtos';

    protected $fillable = [
        'id',
        'nome',
        'unidade',
        'preco',    
    ];

    protected $casts = [
        'preco' => 'decimal:2'
    ];

    public function getUnidades($value = null) 
    {
        $unidades = [
            'CX' => 'CAIXA',
            'LITRO' => 'LITRO',
            'PCT' => 'PACOTE',
            'PC' => 'PEÇA',
            'UNID' => 'UNIDADE',
            'ML' => 'ML',
        ];

        if(!empty($value)){
            return $unidades[$value];
        }else{
            return $unidades;
        }        
    }

}
