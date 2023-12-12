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
        'painel_id',
        'categoria_id',
        'previsao_inicio',
        'previsao_termino',
        'pevisao_duracao',
        'data_inicio',
        'data_termino',
        'duracao',
    ];

    const situacao = [
        'parado' => 'Parado',
        'executando' => 'Execultando',
        'concluido' => 'Concluido',
        'aguardando_inicio' => 'Aguardando inicio'
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function painel()
    {
        return $this->belongsTo(PainelModel::class, 'painel_id');
    }

    public function categoria()
    {
        return $this->belongsTo(CategoriasModel::class, 'categoria_id');
    }

    public function detalhes()
    {
    }
}
