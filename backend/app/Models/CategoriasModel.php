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
        'painel_id'
    ];

    public function painel(){
        return $this->belongsTo(PainelModel::class, 'painel_id');
    }

    public function tasks(){
        return $this->hasMany(TasksModel::class, 'categoria_id');

        // return $this->hasMany(TasksModel::class, 'categoria_id')
        //     ->where('painel_id', $this->painel_id);
    }
}
