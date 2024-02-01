<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tarefas', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes();
            $table->string('titulo');
            $table->text('descricao')->nullable();
            $table->dateTime('inicio');
            $table->dateTime('fim');
            $table->dateTime('fnicio_previstto');
            $table->dateTime('fim_previsto');
            $table->time('duracao_prevista');
            $table->time('duracao');
            $table->foreignId('status_id')->references('id')->on('status');
            $table->string('situacao')->nullable()->comment('[aguardando, executando, concluido]');
            $table->foreignId('pessoa_id')->nullable()->references('id')->on('pessoas');
            $table->json('formulario')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tarefas');
    }
};
