:root {
  font-family: Inter, ui-rounded, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #222844;
  background: #f1f3ff;
  font-synthesis: none;
  font-weight: 500;
}
* { box-sizing: border-box; }
body { min-height: 100vh; margin: 0; padding: 26px; background: radial-gradient(circle at 12% 5%, #fff 0, transparent 30%), linear-gradient(145deg, #f1f3ff, #e2eaff 60%, #f7e9ff); }
button, input { font: inherit; }
button { cursor: pointer; }
.shell { width: min(1120px, 100%); margin: 0 auto; }
.auth-view { width: min(460px, 100%); margin: 5vh auto; padding: 38px; border: 1px solid #e7e9f5; border-radius: 26px; background: #fff; box-shadow: 0 24px 70px #273c6417; text-align: center; }
.brand-mark, .brand-small { display: inline-grid; place-items: center; background: linear-gradient(145deg, #8467f6, #583bdd); color: white; font-weight: 1000; transform: rotate(-5deg); }
.brand-mark { width: 60px; height: 60px; margin-bottom: 16px; border-radius: 19px; font-size: 2rem; box-shadow: 0 7px 0 #3f2bb5; }
.eyebrow { margin: 0 0 7px; color: #7966d7; font-size: .7rem; font-weight: 900; letter-spacing: .15em; }
h1, h2, p { margin-top: 0; }
h1 { margin-bottom: 10px; color: #27294b; font-size: clamp(1.9rem, 5vw, 2.6rem); line-height: 1.12; }
h1 span { color: #7058de; }
h2 { margin: 0; font-size: 1.3rem; }
.muted { color: #747b93; }
.auth-copy { margin-bottom: 25px; }
.auth-form { display: grid; gap: 9px; text-align: left; }
.auth-form label { margin-top: 5px; color: #424965; font-size: .86rem; font-weight: 800; }
.auth-form input, .chat-form input { min-width: 0; padding: 12px 14px; border: 1px solid #dfe3f0; border-radius: 12px; outline: none; background: #fbfcff; color: #242944; }
.auth-form input:focus, .chat-form input:focus { border-color: #8874ed; box-shadow: 0 0 0 3px #8874ed20; }
.primary-button { padding: 12px 19px; border: 0; border-radius: 12px; background: #7058de; color: #fff; font-weight: 900; box-shadow: 0 4px 0 #5039b8; transition: transform .15s, background .15s; }
.primary-button:hover { background: #5e46cf; transform: translateY(-1px); }
.auth-form .primary-button { margin-top: 5px; }
.form-message { min-height: 18px; margin: 0; color: #c44545; font-size: .83rem; }
.switch-auth { margin: 20px 0 0; color: #727990; font-size: .9rem; }
.text-button { padding: 2px; border: 0; background: none; color: #644bd5; font-weight: 900; }
.disclaimer { margin: 24px 0 0; color: #9499aa; font-size: .74rem; line-height: 1.5; }
.app-view { padding-bottom: 16px; }
.topbar { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 20px; padding: 12px 4px; }
.wordmark { display: inline-flex; align-items: center; gap: 10px; color: #292849; font-size: 1.35rem; font-weight: 1000; text-decoration: none; }
.brand-small { width: 36px; height: 36px; border-radius: 12px; font-size: 1.2rem; }
.user-tools { display: flex; align-items: center; gap: 15px; }
.robux-pill { padding: 9px 13px; border: 1px solid #eadf9a; border-radius: 12px; background: #fff9dc; color: #9b7000; font-weight: 900; white-space: nowrap; }
.robux-pill small { color: #9c8953; font-size: .68rem; }
.welcome-user { color: #747b93; font-size: .88rem; white-space: nowrap; }
.welcome-user strong { color: #303454; }
.quiet-button { padding: 8px 12px; border: 1px solid #e0e3ef; border-radius: 10px; background: #fff; color: #5e6680; }
.dashboard-grid { display: grid; grid-template-columns: minmax(0, 1.65fr) minmax(275px, .8fr); gap: 18px; align-items: stretch; }
.welcome-panel, .game-panel, .chat-panel { border: 1px solid #e4e8f4; border-radius: 21px; background: #fff; box-shadow: 0 15px 45px #273c640c; }
.welcome-panel { grid-column: 1 / -1; display: flex; min-height: 185px; align-items: center; justify-content: space-between; overflow: hidden; padding: 25px 38px; background: linear-gradient(110deg, #fff 38%, #f1efff); }
.welcome-panel h1 { margin-bottom: 7px; font-size: clamp(1.8rem, 4vw, 2.4rem); }
.welcome-panel .muted { margin-bottom: 18px; }
.play-button { background: #ff735b; box-shadow: 0 4px 0 #d94f3a; }
.play-button:hover { background: #f26349; }
.hero-avatar { position: relative; width: 100px; height: 130px; margin-right: 7%; flex: 0 0 auto; }
.avatar-face { position: absolute; z-index: 2; top: 28px; left: 20px; width: 58px; height: 49px; border-radius: 9px; background: #f2bd91; box-shadow: inset -5px -4px #df9f73; }
.avatar-face i { position: absolute; top: 17px; left: 15px; width: 5px; height: 6px; border-radius: 50%; background: #30324c; }
.avatar-face i:nth-child(2) { left: 38px; }
.avatar-face b { position: absolute; top: 31px; left: 24px; width: 12px; height: 3px; border-radius: 5px; background: #a95648; }
.bacon-hair { position: absolute; z-index: 3; top: 15px; left: 15px; width: 68px; height: 28px; border: 5px solid #a64a36; border-radius: 50% 50% 38% 38%; background: repeating-linear-gradient(0deg, #f4d173 0 5px, #bc5238 5px 9px); transform: rotate(-8deg); }
.avatar-shirt { position: absolute; top: 76px; left: 14px; width: 70px; height: 39px; border-radius: 8px 8px 2px 2px; background: #5a79de; }
.avatar-legs { position: absolute; top: 112px; left: 22px; display: flex; gap: 12px; }
.avatar-legs i { width: 21px; height: 16px; border-radius: 0 0 5px 5px; background: #353d60; }
.game-panel, .chat-panel { padding: 20px; }
.section-heading { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
.game-tag { padding: 6px 9px; border-radius: 20px; background: #f1edff; color: #7058d6; font-size: .67rem; font-weight: 900; letter-spacing: .06em; }
.game-description { margin: 10px 0 14px; font-size: .88rem; line-height: 1.45; }
.canvas-wrap { position: relative; overflow: hidden; border: 1px solid #d8e5f4; border-radius: 14px; background: #b7e5ff; }
canvas { display: block; width: 100%; height: auto; aspect-ratio: 2 / 1; }
.game-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; padding: 12px; background: #1f2a4a66; color: white; text-align: center; text-shadow: 0 2px 5px #1e2748; }
.game-overlay strong { font-size: clamp(1.1rem, 3vw, 1.7rem); }
.game-overlay span { font-size: .85rem; }
.game-overlay.is-hidden { display: none; }
.game-footer { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding-top: 13px; }
.game-footer span { color: #81889d; font-size: .72rem; line-height: 1.4; }
.game-footer .primary-button { padding: 10px 13px; white-space: nowrap; }
.touch-controls { display: none; justify-content: center; gap: 10px; margin-top: 12px; }
.touch-controls button { width: 50px; height: 44px; border: 0; border-radius: 12px; background: #edf0ff; color: #414d79; font-size: 1.2rem; font-weight: 900; touch-action: none; }
.touch-controls button:last-child { margin-left: 12px; background: #ffeadf; color: #b75137; }
.chat-panel { display: flex; min-height: 360px; flex-direction: column; }
.online-dot { color: #7c849a; font-size: .75rem; }
.online-dot::first-letter { color: #57b879; }
.chat-notice { margin: 11px 0; color: #9a9fb0; font-size: .73rem; line-height: 1.4; }
.chat-messages { display: flex; flex: 1; flex-direction: column; gap: 9px; overflow-y: auto; min-height: 170px; max-height: 260px; padding: 12px; border-radius: 12px; background: #f7f8fc; }
.chat-message { align-self: flex-start; max-width: 94%; padding: 8px 10px; border-radius: 11px 11px 11px 3px; background: #fff; color: #4a5068; font-size: .82rem; overflow-wrap: anywhere; box-shadow: 0 2px 7px #3038540c; }
.chat-message strong { display: block; margin-bottom: 3px; color: #7058d6; font-size: .72rem; }
.chat-form { display: flex; gap: 7px; margin-top: 10px; }
.chat-form input { flex: 1; padding: 10px; font-size: .82rem; }
.chat-form button { width: 42px; flex: 0 0 auto; border: 0; border-radius: 11px; background: #7058de; color: white; font-size: 1.1rem; }
.app-footer { padding: 16px 5px 0; color: #9a9fb0; font-size: .73rem; text-align: center; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; clip-path: inset(50%); border: 0; }
[hidden] { display: none !important; }
@media (pointer: coarse), (max-width: 700px) {
  body { padding: 12px; }
  .auth-view { margin: 2vh auto; padding: 28px 22px; }
  .topbar { align-items: flex-start; }
  .user-tools { justify-content: flex-end; flex-wrap: wrap; gap: 8px; }
  .welcome-user { display: none; }
  .dashboard-grid { grid-template-columns: 1fr; }
  .welcome-panel { grid-column: auto; min-height: 170px; padding: 21px; }
  .hero-avatar { margin-right: 0; transform: scale(.82); transform-origin: center right; }
  .game-panel, .chat-panel { padding: 16px; }
  .touch-controls { display: flex; }
}
@media (max-width: 420px) {
  body { padding: 8px; }
  .wordmark { font-size: 1.1rem; }
  .robux-pill { padding: 8px; font-size: .83rem; }
  .robux-pill small { display: block; }
  .quiet-button { padding: 7px 9px; }
  .welcome-panel { padding: 17px; }
  .hero-avatar { width: 77px; margin-left: -8px; transform: scale(.68); }
  .game-footer { align-items: flex-start; flex-direction: column; }
  }
