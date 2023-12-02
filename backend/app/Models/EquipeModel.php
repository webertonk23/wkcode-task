<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EquipeModel extends Model
{
    use HasFactory;

    protected $table = 'equipes';

    protected $fillable = [
        'id',
        'nome',
    ];

    public function paineis(){
        return $this->hasMany(PainelModel::class, 'equipe_id');
    }
}
