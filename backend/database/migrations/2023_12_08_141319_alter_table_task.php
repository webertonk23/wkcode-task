<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTableTask extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->dateTime('previsao_inicio')->nullable();
            $table->dateTime('previsao_termino')->nullable();
            $table->time('pevisao_duracao')->nullable();
            $table->dateTime('data_inicio')->nullable();
            $table->dateTime('data_termino')->nullable();
            $table->time('duracao')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropColumn('previsao_inicio');
            $table->dropColumn('previsao_termino');
            $table->dropColumn('pevisao_duracao');
            $table->dropColumn('data_inicio');
            $table->dropColumn('data_termino');
            $table->dropColumn('duracao');
        });
    }
}
