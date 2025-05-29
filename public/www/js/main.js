//=========================================================
// main.js
//=========================================================

PluginManager.setup($plugins);

// Tambahkan ini sebelum SceneManager.run
Graphics._boxWidth = 1280;
Graphics._boxHeight = 720;
Graphics._width = 1280;
Graphics._height = 720;

window.onload = function() {
    SceneManager.run(Scene_Boot);

    // Paksa ubah ukuran canvas DOM
    const canvas = document.getElementById('gameCanvas');
    if (canvas) {
        canvas.style.width = '1280px';
        canvas.style.height = '720px';
    }
};
