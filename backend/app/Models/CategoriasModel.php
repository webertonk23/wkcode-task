<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CategoriasModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'categorias';

    protected $fillable = [
        'id',
        'nome',
    ];

    public function painel(){
        return $this->belongsTo(PainelModel::class, 'painel_id');
    }
}
