window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.meta = {
  "code": "ZCSS",
  "brand": "ZyeemZia™",
  "name": "Cybersecurity Specialization",
  "full": "ZyeemZia™ Cybersecurity Specialization",
  "short": "ZCSS",
  "domain": "zcss.zyeemzia.com",
  "pdf": "ZCSS-Book.pdf",
  "storeKey": "zcss.v1",
  "tagline": "Think like an attacker. Defend like an engineer.",
  "lead": "A hands-on professional specialization for security analysts and engineers: adversary thinking, network, identity, endpoint and email defence, cloud and containers, secure software and AI systems, vulnerability management, detection engineering, threat hunting, incident response and forensics, practised with real commands, log queries and scenarios.",
  "signature": {
    "type": "hex",
    "name": "The ZCSS Defence Hive",
    "centerSub": "Defence Hive",
    "caption": "Eight interlocking cells of modern cyber defence: foundations, network, identity, hardened endpoints, cloud, secure build, detection and response. Attackers probe for the weakest cell, so every cell has to hold and every cell reinforces its neighbours."
  },
  "hours": "80–100",
  "level": "Professional",
  "audience": [
    "SOC analysts and security engineers",
    "System, network and cloud administrators moving into security",
    "Developers and DevOps engineers who own security in their pipelines",
    "IT auditors and risk staff who need hands-on depth"
  ],
  "passMark": 80,
  "distinctionMark": 90,
  "examSize": 40,
  "examMinutes": 60,
  "capstone": {
    "title": "Capstone: Build a defence programme for a real organisation",
    "brief": "Choose a realistic organisation (for example a mobile financial services provider in Dhaka, a garment exporter with factories in Chattogram and Gazipur, a private hospital group or a university with a hybrid cloud). Assess its exposure across all eight cells of the ZCSS Defence Hive, build working controls and detections in a lab, then prove them in a simulated incident from first alert to lessons learned.",
    "deliverables": [
      "Asset inventory, crown-jewel analysis and a threat profile mapped to adversary tactics",
      "Risk register with likelihood, impact and the top ten treatment decisions",
      "Network segmentation and remote-access design with firewall policy",
      "Identity design: MFA strategy, SSO, joiner-mover-leaver process and privileged access",
      "Endpoint and email baseline with EDR policy and DMARC roll-out plan",
      "Cloud and container security baseline with posture checks and IaC scanning",
      "Secure SDLC and AI-system threat model for one in-house application",
      "Vulnerability management process with risk-based SLAs and metrics",
      "Logging plan, five tested detection rules and one threat-hunt report",
      "Incident response plan, one playbook, forensic timeline and post-incident review"
    ],
    "rubric": [
      { "criterion": "Foundations & risk", "levels": ["Generic risks", "Assets and threats linked", "Tactic-mapped threat profile driving priorities"] },
      { "criterion": "Network", "levels": ["Flat network", "Zones and firewall policy", "Segmented, monitored, least-privilege paths"] },
      { "criterion": "Identity", "levels": ["Passwords only", "MFA and SSO in place", "Phishing-resistant MFA, PAM and lifecycle automation"] },
      { "criterion": "Endpoint, email & vulnerabilities", "levels": ["Ad hoc patching", "Baselines, EDR and scanning", "Risk-based remediation with measured SLAs"] },
      { "criterion": "Cloud & containers", "levels": ["Default settings", "Baseline controls applied", "Policy-as-code with continuous posture checks"] },
      { "criterion": "Secure build & AI", "levels": ["Security at the end", "Testing in the pipeline", "Threat-modelled, supply-chain and AI risks controlled"] },
      { "criterion": "Detection & hunting", "levels": ["Default alerts", "Tuned rules with coverage map", "Tested detections-as-code and hypothesis-led hunts"] },
      { "criterion": "Response & forensics", "levels": ["No plan", "Plan and playbooks", "Exercised, evidence-sound, with lessons that change controls"] }
    ]
  },
  "certificate": {
    "title": "Certificate of Achievement",
    "statement": "has successfully completed all modules of the ZyeemZia™ Cybersecurity Specialization and passed the ZCSS certification exam",
    "skills": [
      "Threat-informed defence",
      "Identity, endpoint & cloud security",
      "Application & AI security",
      "Detection engineering & hunting",
      "Incident response & forensics"
    ]
  },
  "disclaimer": "ZCSS is an independent certification programme created and issued by ZyeemZia. It is not affiliated with, endorsed by, sponsored by or equivalent to any certification or programme from ISC2, ISACA, CompTIA, EC-Council, Google, IBM, Coursera or any other certifying body or vendor. All product names, framework names and trademarks belong to their respective owners. Commands and queries are generic teaching examples; run them only on systems you are authorised to test.",
  "studyPlan": [
    ["Week 1–2", "m1 Foundation", "Threat profile and risk register for your capstone organisation"],
    ["Week 3", "m2 Network", "Segmentation design, firewall rules and packet capture lab"],
    ["Week 4–5", "m3 Identity", "MFA, SSO and privileged-access design; identity attack detection"],
    ["Week 6", "m4 Harden", "Endpoint and email baseline, vulnerability scan and triage"],
    ["Week 7", "m5 Cloud", "Cloud posture review and container hardening lab"],
    ["Week 8", "m6 Build", "Threat model one application and one AI feature"],
    ["Week 9–10", "m7 Detect", "Write and test five detections; run one threat hunt"],
    ["Week 11–12", "m8 Respond", "Tabletop exercise, forensic timeline, capstone pack and exam"]
  ]
};
