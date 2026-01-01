const DEFAULT_AVATAR = 'data:image/jpeg;base64,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';

const $ = (id) => document.getElementById(id);

const el = {
    avatarPreview: null,
    avatarFile: null,
    previewAvatar: null,
    username: null,
    previewUsername: null,
    date: null,
    previewDate: null,
    content: null,
    previewContent: null,
    postPreview: null,
    copyBtn: null,
    copyText: null,
    downloadBtn: null,
    themeDark: null,
    themeLight: null,
};

function init() {
    el.avatarPreview = $('avatar-preview');
    el.avatarFile = $('avatar-file');
    el.previewAvatar = $('preview-avatar');
    el.username = $('username');
    el.previewUsername = $('preview-username');
    el.date = $('date');
    el.previewDate = $('preview-date');
    el.content = $('content');
    el.previewContent = $('preview-content');
    el.postPreview = $('post-preview');
    el.copyBtn = $('copy-btn');
    el.copyText = $('copy-text');
    el.downloadBtn = $('download-btn');
    el.themeDark = $('theme-dark');
    el.themeLight = $('theme-light');

    el.avatarPreview.src = DEFAULT_AVATAR;
    el.previewAvatar.src = DEFAULT_AVATAR;

    el.avatarFile.addEventListener('change', handleAvatarUpload);
    el.username.addEventListener('input', updatePreview);
    el.date.addEventListener('input', updatePreview);
    el.content.addEventListener('input', updatePreview);
    el.copyBtn.addEventListener('click', copyImage);
    el.downloadBtn.addEventListener('click', downloadImage);
    el.themeDark.addEventListener('click', () => setTheme('dark'));
    el.themeLight.addEventListener('click', () => setTheme('light'));
}

function setTheme(theme) {
    el.postPreview.dataset.theme = theme;
    el.themeDark.classList.toggle('theme-toggle__btn--active', theme === 'dark');
    el.themeLight.classList.toggle('theme-toggle__btn--active', theme === 'light');
}

function handleAvatarUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        el.avatarPreview.src = e.target.result;
        el.previewAvatar.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function updatePreview() {
    el.previewUsername.textContent = el.username.value;
    el.previewDate.textContent = el.date.value;
    el.previewContent.textContent = el.content.value;
}

async function generateCanvas() {
    const bg = el.postPreview.dataset.theme === 'light' ? '#fff' : '#0c0c0c';
    return html2canvas(el.postPreview, { backgroundColor: bg, scale: 2 });
}

function flash(text, duration = 1500) {
    const original = el.copyText.textContent;
    el.copyText.textContent = text;
    setTimeout(() => el.copyText.textContent = original, duration);
}

async function copyImage() {
    el.copyText.textContent = '...';
    try {
        const canvas = await generateCanvas();
        canvas.toBlob(async (blob) => {
            try {
                await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
                flash('Copiado!');
            } catch {
                flash('Erro');
            }
        }, 'image/png');
    } catch {
        flash('Erro');
    }
}

async function downloadImage() {
    try {
        const canvas = await generateCanvas();
        const link = document.createElement('a');
        link.download = 'discourse-quote.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch {
        alert('Erro ao baixar');
    }
}

document.addEventListener('DOMContentLoaded', init);
