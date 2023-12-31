<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EquipeModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'equipes';

    protected $fillable = [
        'id',
        'nome',
    ];

    public function paineis(){
        return $this->hasMany(PainelModel::class, 'equipe_id');
    }
}
