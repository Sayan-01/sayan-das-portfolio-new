@import "tailwindcss";

/* ============ TOKENS ============ */
  :root{
    --bg: #0a0908;
    --bg-1: #121110;
    --bg-2: #17150f;
    --line: #2a2620;
    --line-soft: #1e1b16;
    --text: #f4efe4;
    --text-dim: #a49a89;
    --text-faint: #6b6255;
    --flame-1: #ff7a3d;
    --flame-2: #ff3d1f;
    --amber: #ffb238;
    --glow: rgba(255,90,31,.32);
    --display: 'Bricolage Grotesque', 'Inter', sans-serif;
    --body: 'Inter', sans-serif;
    --mono: 'JetBrains Mono', monospace;
    --maxw: 1180px;
    --radius: 18px;
  }

  *{margin:0;padding:0;box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  @media (prefers-reduced-motion: reduce){
    html{scroll-behavior:auto;}
    *{animation-duration:.001ms !important; animation-iteration-count:1 !important; transition-duration:.001ms !important; scroll-behavior:auto !important;}
  }

  body{
    background:var(--bg);
    color:var(--text);
    font-family:var(--body);
    line-height:1.5;
    -webkit-font-smoothing:antialiased;
    overflow-x:hidden;
    position:relative;
  }

  /* grain overlay */
  .grain{
    position:fixed; inset:0; pointer-events:none; z-index:999;
    opacity:.05; mix-blend-mode:overlay;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  }

  ::selection{background:var(--flame-2); color:#fff;}

  a{color:inherit; text-decoration:none;}
  img{max-width:100%; display:block;}
  section{position:relative;}

  .wrap{max-width:var(--maxw); margin:0 auto; padding:0 32px;}
  @media (max-width:640px){.wrap{padding:0 20px;}}

  .eyebrow{
    font-family:var(--mono); font-size:12.5px; letter-spacing:.14em; text-transform:uppercase;
    color:var(--flame-1); display:inline-flex; align-items:center; gap:9px; margin-bottom:18px; font-weight:500;
  }
  .eyebrow::before{content:''; width:14px; height:1px; background:var(--flame-1); display:inline-block;}

  h1,h2,h3{font-family:var(--display); font-weight:700; letter-spacing:-.02em; line-height:1.04;}

  .btn{
    font-family:var(--body); font-weight:600; font-size:14.5px;
    padding:14px 26px; border-radius:999px; display:inline-flex; align-items:center; gap:9px;
    border:1px solid transparent; cursor:pointer; transition:transform .25s ease, box-shadow .25s ease, background .25s ease, border-color .25s ease;
    white-space:nowrap;
  }
  .btn-fill{ background:linear-gradient(135deg, var(--flame-1), var(--flame-2)); color:#0a0908; box-shadow:0 8px 30px -8px var(--glow);}
  .btn-fill:hover{transform:translateY(-2px); box-shadow:0 14px 36px -8px var(--glow);}
  .btn-outline{border-color:var(--line); color:var(--text);}
  .btn-outline:hover{border-color:var(--flame-1); color:var(--flame-1); transform:translateY(-2px);}
  .btn:focus-visible, a:focus-visible, button:focus-visible{outline:2px solid var(--amber); outline-offset:3px;}

  .tag{
    font-family:var(--mono); font-size:12px; padding:6px 12px; border:1px solid var(--line);
    border-radius:999px; color:var(--text-dim); background:var(--bg-1);
  }

  .reveal{opacity:0; transform:translateY(26px); transition:opacity .8s ease, transform .8s ease;}
  .reveal.in{opacity:1; transform:translateY(0);}

  /* ============ NAV ============ */
  header.nav{
    position:fixed; top:0; left:0; right:0; z-index:500;
    background:rgba(10,9,8,.72); backdrop-filter:blur(14px);
    border-bottom:1px solid var(--line-soft);
  }
  .nav-inner{
    max-width:var(--maxw); margin:0 auto; padding:18px 32px;
    display:flex; align-items:center; justify-content:space-between;
  }
  .logo{font-family:var(--mono); font-weight:500; font-size:17px; letter-spacing:.02em;}
  .logo span{color:var(--flame-1);}
  .nav-links{display:flex; gap:34px; list-style:none;}
  .nav-links a{font-size:14px; color:var(--text-dim); transition:color .2s ease; position:relative;}
  .nav-links a:hover{color:var(--text);}
  .nav-cta{display:flex; align-items:center; gap:18px;}
  .burger{display:none; flex-direction:column; gap:5px; background:none; border:0; cursor:pointer; padding:6px;}
  .burger span{width:22px; height:2px; background:var(--text); display:block;}

  @media (max-width:860px){
    .nav-links{
      position:fixed; top:64px; left:0; right:0; background:var(--bg-1);
      flex-direction:column; padding:24px 32px; gap:20px; border-bottom:1px solid var(--line);
      transform:translateY(-130%); transition:transform .35s ease; z-index:400;
    }
    .nav-links.open{transform:translateY(0);}
    .burger{display:flex;}
    .nav-cta .btn-outline{display:none;}
  }

  /* ============ HERO ============ */
  #hero{
    padding:168px 0 90px;
    overflow:hidden;
  }
  .mesh{
    position:absolute; inset:-10% -10% auto -10%; height:900px; z-index:-1; pointer-events:none;
    background:
      radial-gradient(600px 460px at 18% 22%, rgba(255,122,61,.24), transparent 65%),
      radial-gradient(520px 420px at 82% 8%, rgba(255,61,31,.16), transparent 60%),
      radial-gradient(480px 380px at 60% 55%, rgba(255,178,56,.08), transparent 65%);
    filter:blur(10px);
    animation:drift 22s ease-in-out infinite alternate;
  }
  @keyframes drift{ to{ transform:translate(2%, 3%) scale(1.03); } }

  .hero-grid{
    display:grid; grid-template-columns:1.15fr .85fr; gap:56px; align-items:center;
  }
  @media (max-width:960px){ .hero-grid{grid-template-columns:1fr;} }

  .hero-lead{font-family:var(--mono); color:var(--text-faint); font-size:15px; margin-bottom:6px;}
  h1.hero-name{
    font-size:clamp(48px, 8vw, 92px); color:var(--text);
  }
  h1.hero-name .flame{
    background:linear-gradient(100deg, var(--flame-1), var(--amber) 55%, var(--flame-2));
    -webkit-background-clip:text; background-clip:text; color:transparent;
  }
  .hero-role{
    font-family:var(--display); font-weight:500; font-size:clamp(18px,2.4vw,26px);
    color:var(--text-dim); margin-top:18px; max-width:640px;
  }
  .hero-role b{color:var(--text); font-weight:600;}
  .hero-copy{
    margin-top:22px; color:var(--text-dim); font-size:16px; max-width:540px; line-height:1.7;
  }
  .hero-actions{display:flex; gap:14px; margin-top:34px; flex-wrap:wrap;}

  /* terminal card */
  .terminal{
    background:linear-gradient(180deg, var(--bg-1), var(--bg));
    border:1px solid var(--line); border-radius:var(--radius);
    box-shadow:0 30px 70px -30px rgba(0,0,0,.7), 0 0 0 1px rgba(255,122,61,.05);
    overflow:hidden;
  }
  .term-bar{
    display:flex; align-items:center; gap:7px; padding:13px 16px; border-bottom:1px solid var(--line-soft);
    background:var(--bg-2);
  }
  .term-bar span{width:10px; height:10px; border-radius:50%; background:#403a30;}
  .term-bar span:nth-child(1){background:#ff5f57;}
  .term-bar span:nth-child(2){background:#febc2e;}
  .term-bar span:nth-child(3){background:#28c840;}
  .term-bar em{font-style:normal; font-family:var(--mono); font-size:12px; color:var(--text-faint); margin-left:8px;}
  .term-body{padding:22px 22px 26px; font-family:var(--mono); font-size:13.5px; color:var(--text-dim); min-height:230px;}
  .term-body .prompt{color:var(--flame-1);}
  .term-body .out{color:var(--text); margin:3px 0 12px 0; padding-left:16px;}
  .cursor{display:inline-block; width:7px; height:14px; background:var(--flame-1); vertical-align:middle; margin-left:2px; animation:blink 1s step-end infinite;}
  @keyframes blink{50%{opacity:0;}}

  /* marquee */
  .marquee-wrap{margin-top:80px; border-top:1px solid var(--line-soft); border-bottom:1px solid var(--line-soft); padding:20px 0; overflow:hidden;}
  .marquee{display:flex; gap:40px; white-space:nowrap; width:max-content; animation:scroll 34s linear infinite;}
  @keyframes scroll{ from{transform:translateX(0);} to{transform:translateX(-50%);} }
  .marquee span{font-family:var(--mono); font-size:13px; letter-spacing:.08em; color:var(--text-faint); text-transform:uppercase;}
  .marquee span.dot{color:var(--flame-1);}

  /* ============ SECTION HEADS ============ */
  .sec{padding:120px 0;}
  .sec-head{display:flex; justify-content:space-between; align-items:flex-end; gap:40px; margin-bottom:56px; flex-wrap:wrap;}
  .sec-head h2{font-size:clamp(30px,4vw,44px); max-width:600px;}
  .sec-head p{color:var(--text-dim); max-width:360px; font-size:15px; padding-bottom:4px;}

  /* ============ ABOUT ============ */
  #about{background:var(--bg-1); border-top:1px solid var(--line-soft); border-bottom:1px solid var(--line-soft);}
  .about-grid{display:grid; grid-template-columns:1fr 1fr; gap:70px; align-items:start;}
  @media (max-width:900px){.about-grid{grid-template-columns:1fr; gap:44px;}}
  .about-quote{font-family:var(--display); font-size:clamp(26px,3.4vw,38px); line-height:1.18; font-weight:600;}
  .about-quote .accent{color:var(--flame-1);}
  .about-copy{color:var(--text-dim); font-size:16px; line-height:1.8; margin-top:26px;}

  .cap-grid{display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--line); border:1px solid var(--line); border-radius:var(--radius); overflow:hidden;}
  .cap{background:var(--bg); padding:28px 24px;}
  .cap .num{font-family:var(--mono); color:var(--flame-1); font-size:12.5px; letter-spacing:.1em;}
  .cap h3{font-size:18px; margin:14px 0 8px; font-family:var(--display); font-weight:600;}
  .cap p{font-size:13.5px; color:var(--text-dim); line-height:1.6;}

  /* ============ STACK ============ */
  .stack-grid{display:grid; grid-template-columns:repeat(4, 1fr); gap:18px;}
  @media (max-width:900px){.stack-grid{grid-template-columns:1fr 1fr;}}
  @media (max-width:560px){.stack-grid{grid-template-columns:1fr;}}
  .stack-card{
    background:var(--bg-1); border:1px solid var(--line); border-radius:var(--radius); padding:26px 22px;
    transition:border-color .25s ease, transform .25s ease;
  }
  .stack-card:hover{border-color:rgba(255,122,61,.4); transform:translateY(-4px);}
  .stack-card h3{font-size:14px; font-family:var(--mono); color:var(--flame-1); text-transform:uppercase; letter-spacing:.08em; font-weight:500; margin-bottom:16px;}
  .stack-pills{display:flex; flex-wrap:wrap; gap:8px;}

  /* ============ PROJECTS ============ */
  .proj{
    display:grid; grid-template-columns:.9fr 1.1fr; gap:0; border:1px solid var(--line); border-radius:var(--radius);
    overflow:hidden; margin-bottom:26px; background:var(--bg-1);
  }
  .proj:last-child{margin-bottom:0;}
  @media (max-width:820px){.proj{grid-template-columns:1fr;}}
  .proj-cover{
    min-height:280px; position:relative; overflow:hidden;
  }
  .proj-cover::after{content:''; position:absolute; inset:0; background:linear-gradient(180deg, transparent 40%, rgba(0,0,0,.35));}
  .proj-cover .pf-idx{
    position:absolute; top:20px; left:22px; font-family:var(--mono); font-size:13px; color:rgba(255,255,255,.75); letter-spacing:.08em;
  }
  .cover-1{background:radial-gradient(120% 120% at 15% 15%, #ff8a4d, #ff3d1f 45%, #4a1207 100%);}
  .cover-2{background:radial-gradient(120% 120% at 85% 20%, #ffcf6b, #ff5a1f 50%, #240c02 100%);}
  .cover-3{background:radial-gradient(120% 120% at 30% 85%, #ff5a1f, #7a1c07 55%, #0a0908 100%);}

  .proj-body{padding:38px 40px; display:flex; flex-direction:column; justify-content:center;}
  .proj-body .pf-eyebrow{font-family:var(--mono); font-size:12px; color:var(--text-faint); letter-spacing:.1em; text-transform:uppercase; margin-bottom:10px;}
  .proj-body h3{font-size:26px; margin-bottom:12px;}
  .proj-body p{color:var(--text-dim); font-size:15px; line-height:1.7; margin-bottom:20px;}
  .proj-tags{display:flex; flex-wrap:wrap; gap:8px; margin-bottom:22px;}
  .proj-link{display:inline-flex; align-items:center; gap:8px; font-size:14px; font-weight:600; color:var(--text); transition:gap .2s ease, color .2s ease;}
  .proj-link:hover{gap:12px; color:var(--flame-1);}

  /* ============ JOURNEY ============ */
  #journey{background:var(--bg-1); border-top:1px solid var(--line-soft); border-bottom:1px solid var(--line-soft);}
  .timeline{position:relative; max-width:840px; margin-top:10px;}
  .timeline::before{content:''; position:absolute; left:9px; top:8px; bottom:8px; width:1px; background:var(--line);}
  .t-item{position:relative; padding:0 0 48px 40px;}
  .t-item:last-child{padding-bottom:0;}
  .t-dot{position:absolute; left:0; top:4px; width:19px; height:19px; border-radius:50%; background:var(--bg-1); border:1px solid var(--line); display:flex; align-items:center; justify-content:center;}
  .t-item.active .t-dot{border-color:var(--flame-1);}
  .t-dot::after{content:''; width:7px; height:7px; border-radius:50%; background:var(--text-faint);}
  .t-item.active .t-dot::after{background:var(--flame-1); box-shadow:0 0 12px var(--glow);}
  .t-date{font-family:var(--mono); font-size:12.5px; color:var(--flame-1); letter-spacing:.06em; margin-bottom:8px; display:block;}
  .t-item h3{font-size:19px; margin-bottom:5px; font-family:var(--display); font-weight:600;}
  .t-org{font-size:13.5px; color:var(--text-dim); margin-bottom:10px; font-family:var(--mono);}
  .t-item p{color:var(--text-dim); font-size:14.5px; line-height:1.7; max-width:560px;}

  /* ============ SERVICES ============ */
  .serv-grid{display:grid; grid-template-columns:repeat(4,1fr); gap:1px; background:var(--line); border:1px solid var(--line); border-radius:var(--radius); overflow:hidden;}
  @media (max-width:900px){.serv-grid{grid-template-columns:1fr 1fr;}}
  @media (max-width:560px){.serv-grid{grid-template-columns:1fr;}}
  .serv-card{background:var(--bg); padding:34px 26px; transition:background .25s ease;}
  .serv-card:hover{background:var(--bg-1);}
  .serv-card .s-num{font-family:var(--mono); font-size:12px; color:var(--text-faint);}
  .serv-card h3{font-size:18px; margin:18px 0 10px; font-family:var(--display); font-weight:600;}
  .serv-card p{font-size:13.5px; color:var(--text-dim); line-height:1.65;}

  /* ============ CONTACT ============ */
  #contact{padding:130px 0 100px;}
  .contact-grid{display:grid; grid-template-columns:1fr 1fr; gap:70px;}
  @media (max-width:900px){.contact-grid{grid-template-columns:1fr; gap:46px;}}
  .contact-left h2{font-size:clamp(32px,4.6vw,52px); margin-bottom:20px;}
  .contact-left p{color:var(--text-dim); font-size:16px; max-width:440px; line-height:1.7; margin-bottom:34px;}
  .contact-email{font-family:var(--mono); font-size:20px; color:var(--flame-1); border-bottom:1px solid transparent; transition:border-color .2s ease;}
  .contact-email:hover{border-color:var(--flame-1);}
  .socials{display:flex; gap:18px; margin-top:36px;}
  .socials a{font-family:var(--mono); font-size:13px; color:var(--text-dim); border:1px solid var(--line); padding:9px 16px; border-radius:999px; transition:.2s ease;}
  .socials a:hover{color:var(--flame-1); border-color:var(--flame-1);}

  .cform{display:flex; flex-direction:column; gap:16px;}
  .cform label{font-family:var(--mono); font-size:12px; color:var(--text-faint); text-transform:uppercase; letter-spacing:.08em; margin-bottom:8px; display:block;}
  .cform input, .cform textarea{
    width:100%; background:var(--bg-1); border:1px solid var(--line); border-radius:10px; padding:14px 16px;
    color:var(--text); font-family:var(--body); font-size:14.5px; resize:vertical; transition:border-color .2s ease;
  }
  .cform input:focus, .cform textarea:focus{outline:none; border-color:var(--flame-1);}
  .cform button{margin-top:6px; align-self:flex-start;}
  .form-note{font-size:12.5px; color:var(--text-faint); margin-top:4px;}

  /* ============ FOOTER ============ */
  footer{border-top:1px solid var(--line-soft); padding:44px 0;}
  .foot-inner{display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;}
  .foot-inner .logo{font-size:15px;}
  footer p{color:var(--text-faint); font-size:13px; font-family:var(--mono);}
  .foot-links{display:flex; gap:22px;}
  .foot-links a{font-size:13px; color:var(--text-dim);}
  .foot-links a:hover{color:var(--flame-1);}
