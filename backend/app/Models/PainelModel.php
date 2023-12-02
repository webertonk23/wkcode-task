<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PainelModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'paineis';

    protected $fillable = [
        'id',
        'titulo',
        'descricao',
    ];

    public function equipe(){
        return $this->belongsTo(EquipeModel::class, 'equipe_id');
    }

}
