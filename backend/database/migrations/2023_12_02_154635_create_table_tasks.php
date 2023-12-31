<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTableTasks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->string('titulo');
            $table->longText('descricao');
            $table->integer('status')->default(0)->comment('1 -> concluido 0 -> aberto');
            $table->string('situacao');
            $table->foreignId('user_id')->nullable()->references('id')->on('users');
            $table->foreignId('painel_id')->references('id')->on('paineis');
            $table->foreignId('categoria_id')->references('id')->on('categorias');            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
}
