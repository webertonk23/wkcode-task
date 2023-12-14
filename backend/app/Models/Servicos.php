<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Servicos extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'servicos';

    protected $fillable = [
        'id',
        'nome',
        'preco',    
    ];

    protected $casts = [
        'preco' => 'decimal:2'
    ];
}
