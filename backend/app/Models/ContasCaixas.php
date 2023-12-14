<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContasCaixas extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'contas_caixa';

    protected $fillable = [
        'id',
        'nome',
        'saldo_inicial',
        'data_saldo',
    ];

    protected $casts = [
        'data_saldo' => 'date',
        'saldo_inicial' => 'decimal:2'
    ];
}
