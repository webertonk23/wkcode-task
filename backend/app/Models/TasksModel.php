<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TasksModel extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'tasks';

    protected $fillable = [
        'id',
        'titulo',
        'descricao',
        'status',
        'situacao',
    ];

    public function usuario(){
        return $this->belongsTo(User::class, 'user_id');
    }

}
