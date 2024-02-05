<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjetosModel extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'projetos';

    protected $fillable = [
        'titulo',
        'descricao',
    ];

    public function sprints() {
        return $this->hasmany(SprintsModel::class, 'projeto_id');
    }
    
}
