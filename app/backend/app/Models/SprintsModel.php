<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SprintsModel extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'sprints';

    protected $fillable = [
        'titulo',
        'inicio',
        'fim',
        'situacao',
        'backlog',
        'projeto_id',
    ];

    protected $casts = [
        'backlog' => 'bollean',
        'inicio' => 'datetime',
        'fim' => 'datetime',
    ];

    public function projeto(){
        return $this->belongsTo(ProjetosModel::class, 'projeto_id', 'id');
    }
}
