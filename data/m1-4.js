window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m1",
 "order": 1,
 "code": "Foundation",
 "title": "Security Foundations and Adversary Thinking",
 "subtitle": "CIA, risk, threat actors, adversary tactics, layered controls, zero trust and the cryptography underneath it all.",
 "outcomes": [
  "Reason about risk using assets, threats, vulnerabilities, likelihood and impact.",
  "Profile threat actors and map their behaviour to tactics and techniques.",
  "Design layered controls and apply zero trust principles.",
  "Choose and configure the right cryptographic primitive and manage keys safely."
 ],
 "lessons": [
  {
   "id": "m1-l1",
   "title": "CIA, Risk and the Security Mindset",
   "subtitle": "What we protect, why it matters and how to reason about risk instead of fear.",
   "minutes": 30,
   "objectives": [
    "Explain confidentiality, integrity and availability with real examples.",
    "Calculate and compare risk using likelihood, impact and loss expectancy.",
    "Choose a risk treatment and record it in a register."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Security work is not about buying tools or blocking everything. It is about protecting **things that matter** to an organisation, against **threats that are realistic**, at a **cost that makes sense**. Every decision in this specialization comes back to three properties of information and systems: confidentiality, integrity and availability, usually shortened to **CIA**."
    },
    {
     "type": "framework",
     "title": "The CIA triad and its companions",
     "items": [
      {
       "label": "C",
       "title": "Confidentiality",
       "text": "Only the right people and systems can read the data. Broken by data leaks, stolen credentials or an open storage bucket."
      },
      {
       "label": "I",
       "title": "Integrity",
       "text": "Data and systems are accurate and unchanged except by authorised actions. Broken by tampering, fraud or a malicious software update."
      },
      {
       "label": "A",
       "title": "Availability",
       "text": "Services work when needed. Broken by ransomware, denial of service, failed backups or a single point of failure."
      },
      {
       "label": "AU",
       "title": "Authenticity",
       "text": "You can trust who or what sent the data. Signatures and strong authentication support it."
      },
      {
       "label": "NR",
       "title": "Non-repudiation",
       "text": "A party cannot credibly deny an action they took. Signed logs and digital signatures provide evidence."
      },
      {
       "label": "S",
       "title": "Safety",
       "text": "In hospitals, power plants and factories, a cyber event can injure people. Operational technology puts safety first."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A mobile wallet operator in Dhaka holds balances for millions of customers. **Confidentiality**: transaction histories and national ID data must not leak. **Integrity**: a balance must never change without a valid, authorised transaction. **Availability**: during Eid salary transfers the platform must stay up. A single incident can hit all three at once.",
     "title": "CIA in a mobile financial service"
    },
    {
     "type": "text",
     "text": "**Risk** is the possibility that a threat exploits a vulnerability and causes harm to an asset. Analysts work with five linked ideas: the **asset** (what has value), the **threat** (who or what could cause harm), the **vulnerability** (the weakness), the **likelihood** (how probable the event is) and the **impact** (how bad the result is). Remove any one of them and the risk changes."
    },
    {
     "type": "formula",
     "title": "Quantifying risk",
     "items": [
      {
       "name": "Single loss expectancy",
       "expr": "SLE = asset value × exposure factor",
       "meaning": "Asset value BDT 50 lakh and 40% of it lost in one event gives an SLE of BDT 20 lakh."
      },
      {
       "name": "Annualised loss expectancy",
       "expr": "ALE = SLE × ARO",
       "meaning": "With an annual rate of occurrence of 0.5 (once every two years), ALE = BDT 10 lakh per year."
      },
      {
       "name": "Control value",
       "expr": "value = ALE before − ALE after − annual control cost",
       "meaning": "A positive value means the control saves more than it costs."
      },
      {
       "name": "Qualitative score",
       "expr": "risk = likelihood (1–5) × impact (1–5)",
       "meaning": "Fast and common in registers. A score of 20–25 usually needs action now."
      }
     ]
    },
    {
     "type": "matrix",
     "title": "Likelihood–impact grid for a risk register",
     "x": "Likelihood (rare → almost certain)",
     "y": "Impact (minor → severe)",
     "quadrants": [
      {
       "title": "Prepare and transfer",
       "items": [
        "Data-centre fire or flood",
        "Regional power failure",
        "Treat with backups, DR and insurance"
       ]
      },
      {
       "title": "Act now",
       "items": [
        "Unpatched internet-facing RCE",
        "Phished finance mailbox",
        "Owner decision within days"
       ]
      },
      {
       "title": "Accept and review",
       "items": [
        "Defaced intranet notice board",
        "Record with an owner and review date"
       ]
      },
      {
       "title": "Reduce cheaply",
       "items": [
        "Daily spam and nuisance scans",
        "Automate filtering and patching"
       ]
      }
     ],
     "caption": "Place each risk before arguing about money. Top-right risks need action now; rare but severe risks (top-left) are usually handled with resilience and transfer rather than ever more prevention."
    },
    {
     "type": "table",
     "title": "Risk treatment options",
     "head": [
      "Option",
      "What it means",
      "Example"
     ],
     "rows": [
      [
       "Mitigate (reduce)",
       "Add controls to lower likelihood or impact",
       "Enforce MFA on remote access"
      ],
      [
       "Transfer (share)",
       "Move financial impact to another party",
       "Cyber insurance, outsourced managed detection"
      ],
      [
       "Avoid",
       "Stop the risky activity",
       "Retire an internet-facing legacy portal"
      ],
      [
       "Accept",
       "Formally live with the risk",
       "Owner signs off a low risk until the next review"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Risk is accepted by a business owner with the authority to carry it, not by the analyst who found it. An undocumented 'we will live with it' is not acceptance; it is neglect.",
     "title": "Acceptance needs an owner"
    },
    {
     "type": "scenario",
     "title": "The quarterly risk review",
     "situation": "A university's student portal has an unpatched remote-code-execution flaw. Patching needs a vendor upgrade that takes six weeks. The portal holds exam results and personal data. What should the security analyst recommend first?",
     "options": [
      {
       "text": "Accept the risk until the upgrade because the vendor is responsible for the flaw.",
       "feedback": "The vendor owns the code, but the university owns the risk to its data. Six weeks of exposure to remote code execution is not acceptable without controls.",
       "best": false
      },
      {
       "text": "Shut down the portal permanently and move results to email.",
       "feedback": "Avoidance can be valid, but emailing results creates new confidentiality risks and stops a core service.",
       "best": false
      },
      {
       "text": "Apply compensating controls now, such as a web application firewall rule and restricted admin access, record the risk with an owner and track the upgrade.",
       "feedback": "Correct. Compensating controls reduce likelihood immediately, and the register gives the risk an owner and a deadline.",
       "best": true
      },
      {
       "text": "Buy cyber insurance so any breach cost is covered.",
       "feedback": "Insurance transfers part of the financial impact but does nothing to reduce the chance of a breach.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Risk register entry",
     "purpose": "Record each significant risk with an owner, a score and a treatment decision.",
     "columns": [
      "Risk ID",
      "Asset",
      "Threat and vulnerability",
      "L × I",
      "Treatment",
      "Owner",
      "Review date"
     ],
     "example": [
      [
       "R-014",
       "Student portal",
       "Remote code execution in unpatched framework",
       "4 × 5 = 20",
       "Mitigate: WAF rule now, upgrade in 6 weeks",
       "Registrar",
       "End of month"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "List the three assets your organisation (or your capstone organisation) could least afford to lose. For each, which of confidentiality, integrity or availability matters most, and who would formally own the risk?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Asset",
       "def": "Anything of value to the organisation: data, systems, people, reputation or processes."
      },
      {
       "term": "Threat",
       "def": "A potential cause of harm, such as a criminal group, an insider or a flood."
      },
      {
       "term": "Vulnerability",
       "def": "A weakness that a threat could exploit, such as missing patches or weak passwords."
      },
      {
       "term": "Likelihood",
       "def": "How probable it is that a threat event happens and succeeds."
      },
      {
       "term": "Impact",
       "def": "The size of the harm if a threat event succeeds."
      },
      {
       "term": "Annualised loss expectancy (ALE)",
       "def": "Expected yearly loss from a risk: single loss expectancy multiplied by annual rate of occurrence."
      },
      {
       "term": "Risk appetite",
       "def": "The amount and type of risk an organisation is willing to pursue or keep to meet its goals."
      },
      {
       "term": "Residual risk",
       "def": "The risk that remains after controls are applied."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Security protects what matters to the business: confidentiality, integrity and availability, plus safety where systems touch the physical world.",
      "Risk needs an asset, a threat, a vulnerability, a likelihood and an impact; change any one and the risk changes.",
      "Use likelihood × impact to rank quickly and ALE to compare a control's cost with the loss it prevents.",
      "Every risk gets a treatment and a named business owner; undocumented acceptance is neglect."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Attackers alter payment amounts in transit without being able to read customer data. Which property has been broken?",
       "options": [
        "Confidentiality",
        "Availability",
        "Non-repudiation",
        "Integrity"
       ],
       "answer": 3,
       "explain": "Changing data without authorisation breaks integrity. Confidentiality would be broken if they could read it."
      },
      {
       "q": "An asset is worth BDT 40 lakh, one incident would destroy 25% of it and it is expected once every four years. What is the ALE?",
       "options": [
        "BDT 10 lakh",
        "BDT 40 lakh",
        "BDT 2.5 lakh",
        "BDT 1 lakh"
       ],
       "answer": 2,
       "explain": "SLE = 40 × 0.25 = 10 lakh. ARO = 0.25. ALE = 10 × 0.25 = 2.5 lakh per year."
      },
      {
       "q": "Which treatment does buying cyber insurance represent?",
       "options": [
        "Mitigation",
        "Transfer",
        "Avoidance",
        "Acceptance"
       ],
       "answer": 1,
       "explain": "Insurance shifts part of the financial impact to another party; the threat and vulnerability remain."
      },
      {
       "q": "Who should formally accept a residual risk?",
       "options": [
        "The business owner with authority over the asset",
        "The analyst who discovered the weakness",
        "The external auditor who reviews the risk register each year",
        "Any member of the IT team"
       ],
       "answer": 0,
       "explain": "Acceptance is a business decision taken by the accountable owner, recorded with a review date."
      },
      {
       "q": "Why does safety appear alongside CIA in hospitals and power plants?",
       "options": [
        "Because safety replaces availability as a security goal in those sectors, so uptime no longer matters",
        "Because regulators ban the CIA triad there",
        "Because safety systems never connect to IT networks",
        "Because cyber events in operational systems can harm people physically"
       ],
       "answer": 3,
       "explain": "Operational technology controls physical processes, so a cyber event can injure people. Safety is the top priority there."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l2",
   "title": "Threat Actors and the Attack Lifecycle",
   "subtitle": "Who attacks, why they attack and the stages every intrusion moves through.",
   "minutes": 30,
   "objectives": [
    "Profile the main threat actor types by motive and capability.",
    "Describe the stages of an intrusion from reconnaissance to impact.",
    "Use the lifecycle to place defensive controls at several stages."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Defenders who only think about vulnerabilities miss half the picture. A vulnerability matters when a **capable, motivated** actor can reach it. Threat profiling asks three questions: who would target us, what do they want, and how do they usually operate?"
    },
    {
     "type": "table",
     "title": "Threat actor types",
     "head": [
      "Actor",
      "Main motive",
      "Typical capability",
      "Common targets"
     ],
     "rows": [
      [
       "Financially motivated crime groups",
       "Money: ransom, fraud, data resale",
       "Medium to high; buy tools and access as a service",
       "Banks, MFS, hospitals, manufacturers"
      ],
      [
       "State-sponsored groups",
       "Espionage, disruption, strategic advantage",
       "High; patient, custom tooling",
       "Government, telecoms, energy, defence"
      ],
      [
       "Hacktivists",
       "Publicity for a cause",
       "Low to medium; defacement, DDoS, leaks",
       "Government sites, universities, media"
      ],
      [
       "Insiders",
       "Grievance, money, mistakes",
       "Legitimate access already",
       "Any organisation with sensitive data"
      ],
      [
       "Initial access brokers",
       "Sell footholds to other criminals",
       "Medium; credential theft and exploitation",
       "Remote access gateways, VPNs, email"
      ],
      [
       "Opportunists",
       "Curiosity or easy gains",
       "Low; automated scanning",
       "Anything exposed and unpatched"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Modern cybercrime is specialised. One group writes ransomware, another rents it out, a broker sells the initial foothold and a laundering service moves the money. This is why one stolen VPN password can lead to a full ransomware event weeks later. Extortion is also changing shape: some crews now skip encryption and simply steal data to threaten publication, and others target virtualisation hosts so that one action stops hundreds of servers at once.",
     "title": "Crime is a supply chain"
    },
    {
     "type": "flow",
     "title": "The intrusion lifecycle",
     "items": [
      {
       "label": "Recon",
       "text": "Find people, domains, exposed services and leaked credentials."
      },
      {
       "label": "Initial access",
       "text": "Phishing, stolen credentials, an exposed vulnerability or a trusted supplier."
      },
      {
       "label": "Establish",
       "text": "Run code, gain persistence and escalate privileges."
      },
      {
       "label": "Expand",
       "text": "Discover the network, steal more credentials, move laterally."
      },
      {
       "label": "Act",
       "text": "Collect and exfiltrate data, deploy ransomware or commit fraud."
      }
     ]
    },
    {
     "type": "text",
     "text": "Every stage is a chance to **detect or disrupt** the attacker. Blocking initial access is ideal, but assume some attacks get in. Strong defenders also make lateral movement noisy, privilege escalation hard and exfiltration visible. Security teams call this thinking in terms of **defence across the lifecycle** rather than at one wall."
    },
    {
     "type": "table",
     "title": "Controls across the lifecycle",
     "head": [
      "Stage",
      "Prevent",
      "Detect"
     ],
     "rows": [
      [
       "Recon",
       "Reduce exposed services, clean public metadata",
       "Monitor for typo-squat domains and credential leaks"
      ],
      [
       "Initial access",
       "Phishing-resistant MFA, patch edge devices",
       "Alert on impossible travel and new MFA devices"
      ],
      [
       "Establish",
       "Application control, least privilege",
       "EDR alerts on new services and scheduled tasks"
      ],
      [
       "Expand",
       "Segmentation, tiered admin accounts",
       "Detect unusual remote logons and credential dumping"
      ],
      [
       "Act",
       "Backups, data loss prevention, egress filtering",
       "Alert on large outbound transfers and mass file changes"
      ]
     ]
    },
    {
     "type": "case",
     "title": "Garment exporter ransomware",
     "context": "A garment exporter with offices in Dhaka and factories in Gazipur is hit by ransomware on a Friday night. Investigation shows: a supplier's shared VPN account was bought from a broker three weeks earlier; the attacker ran network scans on day two; a domain administrator password was found in a script on a file share on day five; backups on the same domain were encrypted along with servers.",
     "questions": [
      "Map each finding to a stage of the intrusion lifecycle.",
      "Which single control would most likely have stopped the attack earliest?",
      "Which detection opportunities were missed in the three weeks?"
     ],
     "answer": "Initial access: the shared supplier VPN account. Expand: the network scans and credential discovery on the file share. Act: encryption of servers and domain-joined backups. The earliest effective control is unique supplier accounts with phishing-resistant MFA on the VPN, which would have made the brokered password useless. Missed detections include VPN logons from an unusual country and time, internal scanning from the VPN pool, access to the script share by a supplier account and use of the domain admin account from a non-admin host. Backups should have been isolated from the domain (offline or immutable)."
    },
    {
     "type": "topology",
     "title": "Attack path in the garment exporter case",
     "nodes": [
      {
       "id": "crew",
       "kind": "attacker",
       "label": "Ransomware crew",
       "sub": "bought access from a broker",
       "x": 1,
       "y": 0
      },
      {
       "id": "vpn",
       "kind": "firewall",
       "label": "VPN gateway",
       "sub": "shared supplier account",
       "x": 1,
       "y": 2
      },
      {
       "id": "share",
       "kind": "storage",
       "label": "Script share",
       "sub": "admin password in a script",
       "x": 3,
       "y": 2
      },
      {
       "id": "dc",
       "kind": "server",
       "label": "Domain controller",
       "sub": "domain admin reused",
       "x": 5,
       "y": 2
      },
      {
       "id": "fs",
       "kind": "server",
       "label": "File servers",
       "sub": "encrypted on day 21",
       "x": 4,
       "y": 4
      },
      {
       "id": "bk",
       "kind": "storage",
       "label": "Backup appliance",
       "sub": "domain-joined, encrypted",
       "x": 6,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "crew",
       "b": "vpn",
       "label": "valid login, week 0",
       "style": "attack"
      },
      {
       "a": "vpn",
       "b": "share",
       "label": "scan, day 2",
       "style": "attack"
      },
      {
       "a": "share",
       "b": "dc",
       "label": "stolen admin, day 5",
       "style": "attack"
      },
      {
       "a": "dc",
       "b": "fs",
       "label": "push encryptor",
       "style": "attack"
      },
      {
       "a": "dc",
       "b": "bk",
       "label": "encrypt backups",
       "style": "attack"
      }
     ],
     "zones": [
      {
       "label": "Corporate domain (flat)",
       "x": 3,
       "y": 1,
       "w": 4,
       "h": 4,
       "tone": "warn"
      }
     ],
     "caption": "Every red hop is a detection opportunity: an unusual VPN logon, internal scanning from the VPN pool, a supplier account reading the script share and domain admin use from a non-admin host. Backups inside the same domain fell with it."
    },
    {
     "type": "scenario",
     "title": "Choosing the next investment",
     "situation": "A hospital group has good antivirus but no MFA on webmail, flat networks and backups on the main domain. It can fund one project this quarter. Which gives the biggest risk reduction against ransomware crews?",
     "options": [
      {
       "text": "MFA on webmail and remote access, because it closes the most common initial access path.",
       "feedback": "Correct. Stolen credentials on exposed services are a leading entry route; MFA disrupts the first stage for most attacks.",
       "best": true
      },
      {
       "text": "A second antivirus product to scan files twice.",
       "feedback": "Overlapping antivirus adds little; crews often use legitimate admin tools that antivirus allows.",
       "best": false
      },
      {
       "text": "A new website design with a security badge.",
       "feedback": "Badges do not change exposure or attacker behaviour.",
       "best": false
      },
      {
       "text": "Annual awareness posters in every ward.",
       "feedback": "Awareness helps, but posters alone do not stop credential replay against exposed webmail.",
       "best": false
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Profile actors by motive, capability and likely targets.",
      "Intrusions move through recon, access, establishment, expansion and action.",
      "Place both preventive and detective controls at every stage.",
      "Assume breach: make lateral movement and exfiltration visible."
     ],
     "title": "Key takeaways"
    },
    {
     "type": "reflection",
     "prompt": "Which threat actor type is most likely to target your sector? Write two sentences on their motive and the first stage of the intrusion lifecycle where you would most like to stop them."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Threat actor",
       "def": "An individual or group that carries out or could carry out a cyber attack."
      },
      {
       "term": "Initial access broker",
       "def": "A criminal who gains footholds in organisations and sells that access to others."
      },
      {
       "term": "Ransomware as a service",
       "def": "A model where developers rent ransomware to affiliates who carry out attacks for a share of the ransom."
      },
      {
       "term": "Lateral movement",
       "def": "Moving from one compromised system to others inside the network."
      },
      {
       "term": "Persistence",
       "def": "Techniques that let an attacker keep access after reboots or password changes."
      },
      {
       "term": "Exfiltration",
       "def": "Unauthorised transfer of data out of an organisation."
      },
      {
       "term": "Assume breach",
       "def": "A design mindset that expects attackers to get in and focuses on limiting and detecting their actions."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which actor type most often sells footholds to ransomware affiliates?",
       "options": [
        "Hacktivists",
        "Opportunistic scanners",
        "Initial access brokers",
        "Penetration testers"
       ],
       "answer": 2,
       "explain": "Brokers specialise in gaining and selling access; affiliates buy it to deploy ransomware."
      },
      {
       "q": "Internal network scanning from the VPN address pool most likely indicates which stage?",
       "options": [
        "Expanding through discovery and lateral movement",
        "Reconnaissance of the organisation from the public internet",
        "Exfiltration of data",
        "Initial phishing delivery"
       ],
       "answer": 0,
       "explain": "Scanning from inside means the attacker already has access and is discovering targets."
      },
      {
       "q": "Why should backups be isolated from the main domain?",
       "options": [
        "So that backup jobs run faster over the wide area network at night",
        "So attackers with domain admin rights cannot encrypt or delete them",
        "So backup software needs no licence",
        "So users can restore their own files"
       ],
       "answer": 1,
       "explain": "Domain-joined backups fall with the domain. Offline or immutable copies survive a domain compromise."
      },
      {
       "q": "What does 'assume breach' mean for control design?",
       "options": [
        "Stop investing in perimeter controls completely and move the budget to internal monitoring",
        "Plan detection and containment inside the network, not just at the edge",
        "Expect every user to be malicious",
        "Disconnect all systems from the internet"
       ],
       "answer": 1,
       "explain": "Assume breach balances prevention with internal visibility and limits on attacker movement."
      },
      {
       "q": "Hacktivists most commonly aim for which outcome?",
       "options": [
        "Long-term silent espionage against government networks",
        "Selling access to brokers",
        "Publicity through defacement, leaks or disruption",
        "Fixing vulnerabilities for free"
       ],
       "answer": 2,
       "explain": "Hacktivists want attention for a cause, so their attacks are often visible."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l3",
   "title": "Mapping Adversary Tactics and Techniques",
   "subtitle": "Use a tactics-and-techniques matrix to describe, detect and measure attacker behaviour.",
   "minutes": 35,
   "objectives": [
    "Explain the difference between tactics, techniques and procedures.",
    "Map an incident or threat report to tactic and technique entries.",
    "Build a simple detection coverage map and use it to prioritise work."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Public knowledge bases of adversary behaviour organise what real attackers do into a **matrix**: columns are the attacker's goals (tactics) and the cells are the methods (techniques). The best known, **MITRE ATT&CK**, is maintained by a non-profit research organisation and used across the industry as a common language for intelligence, detection and testing. It is revised about twice a year, so always check technique names and IDs against the current release. In this course we describe the idea in our own words and use a simplified version."
    },
    {
     "type": "table",
     "title": "Tactics, techniques and procedures",
     "head": [
      "Level",
      "Question it answers",
      "Example"
     ],
     "rows": [
      [
       "Tactic",
       "Why: what is the attacker trying to achieve right now?",
       "Credential access"
      ],
      [
       "Technique",
       "How: the general method used",
       "Dumping credentials from operating system memory"
      ],
      [
       "Sub-technique",
       "A more specific variant",
       "Reading the memory of the local security authority process"
      ],
      [
       "Procedure",
       "Exactly how one actor did it",
       "Group X used a renamed system utility to dump memory to a temp folder at 02:00"
      ]
     ]
    },
    {
     "type": "tree",
     "title": "From tactic to procedure: one branch of the matrix",
     "root": {
      "label": "Tactic: credential access",
      "text": "Why: steal secrets to act as someone else",
      "children": [
       {
        "label": "OS credential dumping",
        "text": "Technique (T1003)",
        "children": [
         {
          "label": "LSASS memory",
          "text": "Sub-technique (T1003.001)",
          "children": [
           {
            "label": "Group X procedure",
            "text": "Renamed utility dumps memory to a temp folder at 02:00"
           }
          ]
         },
         {
          "label": "Directory replication",
          "text": "Sub-technique (T1003.006)",
          "children": [
           {
            "label": "Group Y procedure",
            "text": "Replication request sent from a finance workstation"
           }
          ]
         }
        ]
       },
       {
        "label": "Brute force",
        "text": "Technique (T1110)",
        "children": [
         {
          "label": "Password spraying",
          "text": "Sub-technique (T1110.003)",
          "children": [
           {
            "label": "Crew Z procedure",
            "text": "One seasonal password tried against 4,000 accounts"
           }
          ]
         }
        ]
       },
       {
        "label": "Steal web session cookie",
        "text": "Technique (T1539)",
        "children": [
         {
          "label": "Proxy-phishing procedure",
          "text": "Session cookie captured and replayed from abroad"
         }
        ]
       }
      ]
     },
     "caption": "Read down the tree: the tactic is the why, the technique the how, the sub-technique the variant and the procedure exactly what one actor did. A detection written at technique level catches many procedures at once."
    },
    {
     "type": "framework",
     "title": "A simplified tactic sequence (the full enterprise matrix splits some of these further)",
     "items": [
      {
       "label": "T1",
       "title": "Reconnaissance",
       "text": "Gather information about the target."
      },
      {
       "label": "T2",
       "title": "Initial access",
       "text": "Get a first foothold."
      },
      {
       "label": "T3",
       "title": "Execution",
       "text": "Run attacker-controlled code."
      },
      {
       "label": "T4",
       "title": "Persistence",
       "text": "Survive reboots and credential changes."
      },
      {
       "label": "T5",
       "title": "Privilege escalation",
       "text": "Gain higher permissions."
      },
      {
       "label": "T6",
       "title": "Defence evasion",
       "text": "Avoid or disable security controls."
      },
      {
       "label": "T7",
       "title": "Credential access",
       "text": "Steal passwords, hashes, tokens and keys."
      },
      {
       "label": "T8",
       "title": "Discovery",
       "text": "Learn the environment."
      },
      {
       "label": "T9",
       "title": "Lateral movement",
       "text": "Reach other systems."
      },
      {
       "label": "T10",
       "title": "Collection & C2",
       "text": "Gather data and control implants remotely."
      },
      {
       "label": "T11",
       "title": "Exfiltration",
       "text": "Move data out."
      },
      {
       "label": "T12",
       "title": "Impact",
       "text": "Encrypt, destroy, disrupt or manipulate."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "File hashes and IP addresses change in minutes. Techniques change slowly because they depend on how operating systems and identity systems work. A detection for 'a process reading credential memory' outlives any single malware sample. This is the idea behind the 'pyramid of pain': the higher up you detect, the more it costs the attacker to change.",
     "title": "Behaviour beats indicators"
    },
    {
     "type": "steps",
     "title": "Mapping a report to the matrix",
     "items": [
      {
       "title": "Extract behaviours",
       "text": "Read the incident report or intelligence and list every action as a verb phrase: 'sent link', 'ran script', 'created service'."
      },
      {
       "title": "Assign the tactic",
       "text": "Ask why the attacker did it at that moment."
      },
      {
       "title": "Assign the technique",
       "text": "Choose the general method; add a sub-technique if known."
      },
      {
       "title": "Record the evidence",
       "text": "Note the log source or artefact that proves it."
      },
      {
       "title": "Check coverage",
       "text": "For each technique, mark whether you can prevent, detect or neither."
      }
     ]
    },
    {
     "type": "table",
     "title": "Example mapping: a business email compromise",
     "head": [
      "Observed behaviour",
      "Tactic",
      "Technique (generic)"
     ],
     "rows": [
      [
       "Fake sign-in page sent to finance staff",
       "Initial access",
       "Phishing with a credential-harvesting link"
      ],
      [
       "Session token replayed from another country",
       "Credential access / initial access",
       "Stolen session cookie reuse"
      ],
      [
       "Inbox rule hides replies from the bank",
       "Defence evasion",
       "Email hiding rules"
      ],
      [
       "Supplier invoice altered with new bank details",
       "Impact",
       "Financial theft through payment fraud"
      ]
     ]
    },
    {
     "type": "template",
     "title": "Detection coverage map",
     "purpose": "Track which techniques you can see and stop, so gaps drive your roadmap.",
     "columns": [
      "Tactic",
      "Technique",
      "Data source",
      "Detection rule",
      "Tested?",
      "Gap / action"
     ],
     "example": [
      [
       "Credential access",
       "Credential memory dumping",
       "EDR process access events",
       "Non-system process opens credential process memory",
       "Yes, monthly",
       "None"
      ],
      [
       "Defence evasion",
       "Email hiding rules",
       "Mail audit log",
       "New inbox rule that deletes or moves bank mail",
       "No",
       "Enable mail audit logging"
      ]
     ],
     "rows": 8
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A heat map full of green squares can still hide weak detections. A technique counts as covered only when a rule fires in a test, the alert reaches an analyst and the analyst knows what to do.",
     "title": "Coverage is not a colouring contest"
    },
    {
     "type": "scenario",
     "title": "Prioritising detection work",
     "situation": "Your SOC has two analysts and can build three new detections this month. Threat intelligence says ransomware crews targeting regional banks use remote-management tools, credential dumping and backup deletion. Which approach is best?",
     "options": [
      {
       "text": "Pick the three easiest techniques in the matrix to raise the coverage percentage.",
       "feedback": "Coverage percentage is a vanity metric if it ignores the threats you actually face.",
       "best": false
      },
      {
       "text": "Import every vendor rule available and enable all of them at once.",
       "feedback": "Untuned bulk rules create alert floods that two analysts cannot handle.",
       "best": false
      },
      {
       "text": "Wait until the matrix is fully mapped before building anything.",
       "feedback": "Full mapping takes months; meanwhile the known threats remain undetected.",
       "best": false
      },
      {
       "text": "Build detections for the three techniques in the intelligence, test them and record them on the coverage map.",
       "feedback": "Correct. Threat-informed prioritisation focuses scarce effort on the behaviours most likely to be used against you.",
       "best": true
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Take a recent public incident report you have read. Pick three behaviours from it and map each to a tactic. Could your current tools see each one?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Tactic",
       "def": "The attacker's short-term goal at a given moment, such as persistence or exfiltration."
      },
      {
       "term": "Technique",
       "def": "A general method an attacker uses to achieve a tactic."
      },
      {
       "term": "Procedure",
       "def": "The specific way a particular actor carried out a technique."
      },
      {
       "term": "TTPs",
       "def": "Tactics, techniques and procedures: a description of attacker behaviour."
      },
      {
       "term": "Pyramid of pain",
       "def": "A model showing that detecting higher-level behaviour costs attackers more than blocking hashes or IP addresses."
      },
      {
       "term": "Coverage map",
       "def": "A record of which attacker techniques an organisation can prevent or detect."
      },
      {
       "term": "Threat-informed defence",
       "def": "Prioritising controls and detections based on the behaviours of adversaries likely to target you."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Tactics are the attacker's goals, techniques the methods, procedures one actor's exact steps.",
      "Map incidents and intelligence to techniques so teams share one language for detection and testing.",
      "Behaviour-based detections outlast hashes, IPs and domains because they are costly for attackers to change.",
      "A technique is covered only when a tested rule fires, reaches an analyst and has a response path."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "An attacker creates a scheduled task that runs at every boot. Which tactic does this serve?",
       "options": [
        "Exfiltration",
        "Reconnaissance",
        "Impact",
        "Persistence"
       ],
       "answer": 3,
       "explain": "Running at every boot keeps access alive across restarts: persistence."
      },
      {
       "q": "Which is a procedure rather than a technique?",
       "options": [
        "Group Y renamed a system tool and dumped memory to C:\\Temp at 02:00",
        "Credential dumping",
        "Lateral movement",
        "Phishing"
       ],
       "answer": 0,
       "explain": "A procedure is the specific, observed implementation by one actor."
      },
      {
       "q": "Why do detections based on behaviour last longer than those based on file hashes?",
       "options": [
        "Hashes are illegal to store in a SIEM",
        "Behaviours depend on how systems work and are costly for attackers to change",
        "Behaviour rules never produce false positives, so analysts can trust every alert they raise",
        "File hashes cannot be calculated for malware"
       ],
       "answer": 1,
       "explain": "Changing a hash is trivial; changing how credential theft works on an operating system is not."
      },
      {
       "q": "When is a technique truly 'covered'?",
       "options": [
        "When a tested rule fires and analysts know how to respond",
        "When a vendor says its product supports it",
        "When it is coloured green on the heat map presented to management each quarter",
        "When the technique has a sub-technique ID"
       ],
       "answer": 0,
       "explain": "Coverage requires a working, tested detection and a response path."
      },
      {
       "q": "An inbox rule that moves all mail containing 'bank' to an RSS folder maps best to which tactic?",
       "options": [
        "Discovery",
        "Execution",
        "Reconnaissance",
        "Defence evasion"
       ],
       "answer": 3,
       "explain": "The rule hides evidence from the victim, which is evasion."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l4",
   "title": "Controls, Frameworks, Defence in Depth and Zero Trust",
   "subtitle": "Layer controls of different types and organise them with a framework you can defend to auditors.",
   "minutes": 35,
   "objectives": [
    "Classify controls by function and by type.",
    "Design layered defences that do not share a single point of failure.",
    "Apply zero trust principles to an access decision."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A **control** is any measure that reduces risk. Good programmes mix controls so that when one fails, another still works. You can classify every control in two ways: by **what it does** (its function) and by **how it is implemented** (its type)."
    },
    {
     "type": "table",
     "title": "Control functions",
     "head": [
      "Function",
      "Purpose",
      "Example"
     ],
     "rows": [
      [
       "Preventive",
       "Stop the event from happening",
       "MFA, firewall rules, input validation"
      ],
      [
       "Detective",
       "Notice the event when it happens",
       "SIEM alerts, file integrity monitoring"
      ],
      [
       "Corrective",
       "Limit damage and restore",
       "Restoring from backup, isolating a host"
      ],
      [
       "Deterrent",
       "Discourage the attempt",
       "Legal banners, visible monitoring"
      ],
      [
       "Compensating",
       "Substitute when the main control is not possible",
       "Extra monitoring on a system that cannot be patched"
      ]
     ]
    },
    {
     "type": "compare",
     "title": "Control types",
     "columns": [
      {
       "title": "Administrative",
       "items": [
        "Policies and standards",
        "Security awareness training",
        "Background checks",
        "Access review procedures"
       ]
      },
      {
       "title": "Technical",
       "items": [
        "Encryption",
        "EDR and firewalls",
        "MFA",
        "Logging and alerting"
       ]
      },
      {
       "title": "Physical",
       "items": [
        "Badge access to server rooms",
        "CCTV",
        "Locked cabinets for backup media",
        "Environmental controls"
       ]
      }
     ]
    },
    {
     "type": "layers",
     "title": "Defence in depth for a hospital records system",
     "items": [
      {
       "label": "Data",
       "parts": [
        "Encryption at rest",
        "Backups that are immutable",
        "Data classification"
       ]
      },
      {
       "label": "Application",
       "parts": [
        "Role-based access",
        "Input validation",
        "Audit trail"
       ]
      },
      {
       "label": "Host",
       "parts": [
        "Hardened OS baseline",
        "EDR",
        "Patching within SLA"
       ]
      },
      {
       "label": "Identity",
       "parts": [
        "SSO with MFA",
        "Privileged access workflow",
        "Access reviews"
       ]
      },
      {
       "label": "Network",
       "parts": [
        "Clinical VLAN segmentation",
        "Firewall between zones",
        "Network detection"
       ]
      },
      {
       "label": "People & process",
       "parts": [
        "Training",
        "Incident response plan",
        "Change control"
       ]
      }
     ]
    },
    {
     "type": "text",
     "text": "**Zero trust** is a strategy, not a product. It removes the idea that anything inside the network is automatically trusted. Every request is evaluated using the identity of the user, the health of the device, the sensitivity of the resource and the context of the request, and access is granted with the **least privilege** for the **shortest time** needed."
    },
    {
     "type": "framework",
     "title": "Zero trust principles",
     "items": [
      {
       "label": "Z1",
       "title": "Verify explicitly",
       "text": "Authenticate and authorise every request using all available signals."
      },
      {
       "label": "Z2",
       "title": "Least privilege",
       "text": "Grant only what is needed, just in time and just enough."
      },
      {
       "label": "Z3",
       "title": "Assume breach",
       "text": "Segment, encrypt end to end and monitor as if attackers are already inside."
      },
      {
       "label": "Z4",
       "title": "Device health",
       "text": "Check patch level, EDR status and compliance before access."
      },
      {
       "label": "Z5",
       "title": "Continuous evaluation",
       "text": "Re-check when risk changes, not only at login."
      }
     ]
    },
    {
     "type": "topology",
     "title": "Zero trust access decision for the payment system",
     "nodes": [
      {
       "id": "idp",
       "kind": "idp",
       "label": "Identity provider",
       "sub": "MFA result, user risk",
       "x": 1,
       "y": 1
      },
      {
       "id": "pdp",
       "kind": "controller",
       "label": "Policy engine",
       "sub": "PDP: decides",
       "x": 3,
       "y": 1
      },
      {
       "id": "dev",
       "kind": "monitor",
       "label": "Device health",
       "sub": "EDR and patch status",
       "x": 5,
       "y": 1
      },
      {
       "id": "siem",
       "kind": "siem",
       "label": "SIEM",
       "sub": "every decision logged",
       "x": 0,
       "y": 3
      },
      {
       "id": "pep",
       "kind": "gateway",
       "label": "Access proxy",
       "sub": "PEP: enforces",
       "x": 3,
       "y": 3
      },
      {
       "id": "app",
       "kind": "server",
       "label": "Payment system",
       "sub": "high sensitivity",
       "x": 6,
       "y": 3
      },
      {
       "id": "user",
       "kind": "user",
       "label": "Finance officer",
       "sub": "23:40, new country",
       "x": 3,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "user",
       "b": "pep",
       "label": "request"
      },
      {
       "a": "pep",
       "b": "pdp",
       "label": "ask",
       "style": "dashed"
      },
      {
       "a": "pdp",
       "b": "idp",
       "label": "identity signals"
      },
      {
       "a": "pdp",
       "b": "dev",
       "label": "device signals"
      },
      {
       "a": "pep",
       "b": "app",
       "label": "allow, limit or deny",
       "style": "bold"
      },
      {
       "a": "pep",
       "b": "siem",
       "label": "decision log",
       "style": "dashed"
      }
     ],
     "zones": [
      {
       "label": "Protected resource",
       "x": 6,
       "y": 3,
       "w": 1,
       "h": 1,
       "tone": "accent"
      }
     ],
     "caption": "The proxy enforces but never decides alone: the policy engine combines identity, device and context for each request. In the lesson's scenario identity passes, but device and context fail, so access is limited."
    },
    {
     "type": "table",
     "title": "Common frameworks and what they are for",
     "head": [
      "Framework type",
      "Use it to",
      "Notes"
     ],
     "rows": [
      [
       "Cybersecurity outcome framework (for example NIST CSF 2.0, released in 2024: Govern, Identify, Protect, Detect, Respond, Recover)",
       "Describe programme maturity, set target profiles and report progress",
       "Govern adds risk strategy, roles, policy and supply-chain oversight; good for board reporting"
      ],
      [
       "Information security management system standard (ISO/IEC 27001:2022)",
       "Run a certifiable management system with risk assessment and a statement of applicability",
       "Certificates to the older 2013 edition lapsed when the transition ended in October 2025"
      ],
      [
       "Prioritised control sets",
       "Pick a practical first set of technical safeguards",
       "Useful for small teams; grouped into implementation tiers"
      ],
      [
       "Sector and national regulations (for example central bank ICT guidelines, or NIS2 and DORA for firms operating in the EU)",
       "Meet legal and regulatory duties, including incident reporting deadlines",
       "Mandatory for regulated firms"
      ]
     ]
    },
    {
     "type": "cycle",
     "title": "NIST CSF 2.0: Govern at the centre",
     "center": "Govern",
     "items": [
      {
       "label": "Identify",
       "text": "Understand assets, suppliers, risks and improvement needs."
      },
      {
       "label": "Protect",
       "text": "Safeguards for identity, data, platforms and people."
      },
      {
       "label": "Detect",
       "text": "Find and analyse anomalies and attacks."
      },
      {
       "label": "Respond",
       "text": "Manage, analyse, contain, report and communicate incidents."
      },
      {
       "label": "Recover",
       "text": "Restore assets and operations, and communicate recovery."
      }
     ],
     "caption": "Govern sits in the middle because risk strategy, roles, policy and supply-chain oversight steer the other five functions, which run continuously rather than once."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A framework tells you what areas to cover and how to show progress. Protection comes from controls that are implemented, tested and owned. Map your controls to one primary framework and cross-reference others rather than running several parallel programmes.",
     "title": "Frameworks organise; they do not protect"
    },
    {
     "type": "scenario",
     "title": "Zero trust access decision",
     "situation": "A finance officer signs in correctly with MFA to the payment system from a personal laptop with no EDR, at 23:40, from a new country. Under zero trust principles, what should happen?",
     "options": [
      {
       "text": "Allow full access, because the password and MFA were correct.",
       "feedback": "Zero trust uses more than identity; an unmanaged device and unusual context raise risk for payments.",
       "best": false
      },
      {
       "text": "Deny or step down access, for example allow read-only from a managed browser session, and require a compliant device for payments.",
       "feedback": "Correct. Identity is verified, but device health and context fail the policy for a high-risk resource.",
       "best": true
      },
      {
       "text": "Lock the user's account permanently.",
       "feedback": "This is disproportionate; adaptive policy can still allow safe, limited access.",
       "best": false
      },
      {
       "text": "Allow access but only log it for review next week.",
       "feedback": "A week-later review cannot prevent a fraudulent payment tonight.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Control design checklist",
     "items": [
      "Each critical asset has preventive, detective and corrective controls",
      "No single control failure exposes crown-jewel data",
      "Every control has a named owner",
      "Controls are tested at least yearly",
      "Compensating controls are documented with an end date",
      "Controls map to one primary framework"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Choose one critical system you know well. Does it have at least one preventive, one detective and one corrective control? Which layer would fail first if an attacker had a valid password?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Control",
       "def": "A safeguard or countermeasure that reduces risk."
      },
      {
       "term": "Compensating control",
       "def": "An alternative control used when the primary control cannot be implemented."
      },
      {
       "term": "Defence in depth",
       "def": "Layering independent controls so one failure does not lead to compromise."
      },
      {
       "term": "Zero trust",
       "def": "A security strategy that never grants implicit trust and evaluates every access request using identity, device and context."
      },
      {
       "term": "Least privilege",
       "def": "Giving users and systems only the access they need, for only as long as they need it."
      },
      {
       "term": "Policy decision point",
       "def": "The component that evaluates signals and decides whether to allow an access request."
      },
      {
       "term": "Statement of applicability",
       "def": "A document listing which controls an organisation applies and why others are excluded."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Classify controls by function (preventive, detective, corrective, deterrent, compensating) and by type (administrative, technical, physical).",
      "Layer independent controls so that no single failure exposes a crown-jewel asset.",
      "Zero trust evaluates identity, device health and context for every request and grants the least privilege for the shortest time.",
      "Map controls to one primary framework, such as CSF 2.0 with its Govern function, and cross-reference the rest."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Extra logging and weekly review on a legacy server that cannot be patched is an example of what?",
       "options": [
        "A deterrent control",
        "Risk avoidance",
        "A compensating control",
        "A physical control"
       ],
       "answer": 2,
       "explain": "It substitutes for the missing primary control (patching)."
      },
      {
       "q": "Which is an administrative control?",
       "options": [
        "Disk encryption",
        "A badge reader",
        "An access review procedure",
        "An EDR agent"
       ],
       "answer": 2,
       "explain": "Administrative controls are policies, procedures and people processes."
      },
      {
       "q": "Which zero trust principle is most directly applied by just-in-time admin rights?",
       "options": [
        "Least privilege",
        "Device health",
        "Verify explicitly",
        "Network perimeter trust"
       ],
       "answer": 0,
       "explain": "Just-in-time access limits both the scope and duration of privilege."
      },
      {
       "q": "What is the main purpose of a cybersecurity framework?",
       "options": [
        "To replace the need for technical controls",
        "To guarantee that breaches cannot happen once every control in it is implemented",
        "To configure firewalls automatically",
        "To organise and measure a programme across areas"
       ],
       "answer": 3,
       "explain": "Frameworks give structure and a common language; controls do the protecting."
      },
      {
       "q": "Restoring encrypted servers from backup is which control function?",
       "options": [
        "Preventive",
        "Corrective",
        "Deterrent",
        "Detective"
       ],
       "answer": 1,
       "explain": "Corrective controls restore normal operations after an event."
      },
      {
       "q": "A board asks which part of NIST CSF 2.0 covers setting cybersecurity risk strategy, assigning roles and overseeing supplier risk. Which function should you point to?",
       "options": [
        "Identify",
        "Protect",
        "Govern",
        "Respond"
       ],
       "answer": 2,
       "explain": "Govern, added in version 2.0, covers strategy, roles, policy, oversight and supply-chain risk management; the other functions carry it out."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l5",
   "title": "Cryptography Essentials",
   "subtitle": "Hashing, encryption, signatures, certificates and key management, with the commands analysts actually use.",
   "minutes": 40,
   "objectives": [
    "Choose between hashing, symmetric encryption, asymmetric encryption and signatures.",
    "Explain how TLS and certificates create trust.",
    "Identify weak cryptography and plan key management, including post-quantum readiness."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Cryptography gives us confidentiality, integrity and authenticity using mathematics instead of trust in the network. Analysts do not design algorithms; they **choose the right primitive**, **configure it correctly** and **protect the keys**. Nearly every real-world crypto failure is in configuration or key handling, not in the algorithm."
    },
    {
     "type": "table",
     "title": "The four primitives",
     "head": [
      "Primitive",
      "Gives you",
      "Modern choices",
      "Avoid"
     ],
     "rows": [
      [
       "Hash function",
       "Integrity fingerprint, one-way",
       "SHA-256, SHA-3, BLAKE2",
       "MD5, SHA-1 for security uses"
      ],
      [
       "Symmetric encryption",
       "Fast confidentiality with one shared key",
       "AES-GCM, ChaCha20-Poly1305",
       "DES, 3DES, RC4, ECB mode"
      ],
      [
       "Asymmetric encryption / key exchange",
       "Share secrets without a prior shared key",
       "ECDHE (X25519), hybrid X25519 + ML-KEM-768, RSA ≥ 3072 bits",
       "RSA 1024, static RSA key transport"
      ],
      [
       "Digital signature",
       "Authenticity and integrity, non-repudiation",
       "Ed25519, ECDSA P-256, RSA-PSS; ML-DSA as support matures",
       "Unsigned updates, SHA-1 signatures"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "General hashes are designed to be fast, which helps attackers guessing passwords. Store passwords with a deliberately slow, salted **password hashing** function such as Argon2id, scrypt or bcrypt. A unique salt per password defeats precomputed tables.",
     "title": "Hashing passwords is different"
    },
    {
     "type": "cli",
     "title": "Hashing and verifying files",
     "device": "Linux host",
     "lines": [
      "# Fingerprint a downloaded installer and compare with the publisher's value",
      "sha256sum agent-installer-4.2.1.tar.gz",
      "9f2c1e...b7a4  agent-installer-4.2.1.tar.gz",
      "# Verify a list of hashes in one go",
      "sha256sum -c SHA256SUMS",
      "agent-installer-4.2.1.tar.gz: OK",
      "# Generate a strong random key (32 bytes, base64)",
      "openssl rand -base64 32"
     ],
     "note": "A matching hash proves the file is unchanged only if you obtained the reference hash over a trusted channel, ideally signed."
    },
    {
     "type": "cli",
     "title": "The same check in PowerShell",
     "device": "PowerShell",
     "lines": [
      "Get-FileHash .\\agent-installer-4.2.1.zip -Algorithm SHA256",
      "# Check the Authenticode signature on a Windows binary",
      "Get-AuthenticodeSignature .\\agent.exe | Format-List Status, SignerCertificate"
     ]
    },
    {
     "type": "sequence",
     "title": "A TLS 1.3 handshake",
     "actors": [
      "Client",
      "Server"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "ClientHello + key share",
       "note": "suites, SNI, maybe a hybrid PQ share"
      },
      {
       "from": 1,
       "to": 0,
       "label": "ServerHello + key share",
       "note": "handshake keys derived here",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "{EncryptedExtensions}",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "{Certificate} chain",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "{CertificateVerify}",
       "note": "signature over the handshake",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "{Finished}",
       "reply": true
      },
      {
       "from": 0,
       "to": 0,
       "label": "Check name, dates, chain, revocation"
      },
      {
       "from": 0,
       "to": 1,
       "label": "{Finished}"
      },
      {
       "from": 0,
       "to": 1,
       "label": "[Application data]"
      },
      {
       "from": 1,
       "to": 0,
       "label": "[Application data]",
       "reply": true
      }
     ],
     "caption": "Only the two hellos travel in clear text. Everything in braces, including the certificate, is already encrypted with keys from the ephemeral exchange, which is what gives forward secrecy; square brackets mark traffic protected with the final session keys."
    },
    {
     "type": "cli",
     "title": "Inspecting a server certificate",
     "device": "Linux host",
     "lines": [
      "openssl s_client -connect portal.example.edu:443 -servername portal.example.edu </dev/null 2>/dev/null \\",
      "  | openssl x509 -noout -subject -issuer -dates -ext subjectAltName",
      "subject=CN = portal.example.edu",
      "issuer=C = XX, O = Example CA, CN = Example Issuing CA 2",
      "notBefore=Mar  1 00:00:00 2026 GMT",
      "notAfter=May 30 23:59:59 2026 GMT"
     ],
     "note": "Public TLS certificate lifetimes are being cut in steps under the industry's baseline requirements (a 200-day maximum from March 2026, heading towards 47 days by 2029), so automate issuance and renewal (for example with ACME) and monitor expiry."
    },
    {
     "type": "cycle",
     "title": "Key management lifecycle",
     "center": "Each key",
     "items": [
      {
       "label": "Generate",
       "text": "Vetted library or HSM with a good random source."
      },
      {
       "label": "Store",
       "text": "HSM or managed key vault, never source code or tickets."
      },
      {
       "label": "Use and log",
       "text": "Only named identities and services may use the key; log every use."
      },
      {
       "label": "Rotate",
       "text": "On a schedule and after any suspected exposure."
      },
      {
       "label": "Revoke, destroy",
       "text": "Revoke certificates and securely destroy retired keys, then start again."
      }
     ],
     "caption": "Keys are never finished: every key is generated, protected, used, rotated and retired, and the inventory you build here is the same one a post-quantum migration needs."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Large quantum computers could break today's RSA and elliptic-curve public-key systems, and data stolen now could be decrypted later ('harvest now, decrypt later'). The first post-quantum standards were published in 2024: **ML-KEM** for key establishment and **ML-DSA** and **SLH-DSA** for signatures. Browsers and TLS libraries already offer hybrid key exchange that combines X25519 with ML-KEM. Start a **crypto inventory**, prioritise data that must stay secret for many years, and design for **crypto agility** so algorithms can be swapped without rewriting applications.",
     "title": "Get ready for post-quantum cryptography"
    },
    {
     "type": "timeline",
     "title": "The post-quantum migration path",
     "items": [
      {
       "when": "2016",
       "label": "Public competition opens",
       "text": "NIST invites post-quantum algorithm proposals."
      },
      {
       "when": "2022",
       "label": "First algorithms chosen",
       "text": "Lattice-based key establishment and signature schemes selected."
      },
      {
       "when": "Aug 2024",
       "label": "First standards",
       "text": "FIPS 203 (ML-KEM), FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA) published."
      },
      {
       "when": "2024–2025",
       "label": "Hybrid TLS spreads",
       "text": "Major browsers and content networks enable X25519 + ML-KEM by default."
      },
      {
       "when": "2025",
       "label": "Backup KEM selected",
       "text": "HQC chosen as a second, differently built key-establishment algorithm."
      },
      {
       "when": "~2030",
       "label": "Deprecation (proposed)",
       "text": "Draft guidance proposes deprecating today's 112-bit RSA and ECC."
      },
      {
       "when": "~2035",
       "label": "Disallowed (proposed)",
       "text": "Quantum-vulnerable public-key algorithms proposed to be disallowed."
      }
     ],
     "caption": "Migration is a programme of a decade, not a project: inventory and hybrid key exchange now, signatures and long-lived PKI next. Dates from 2030 are proposals, so check the current official timetable for your sector."
    },
    {
     "type": "scenario",
     "title": "The leaked key",
     "situation": "A developer accidentally pushed a cloud storage access key and a TLS private key to a public code repository. The commit was removed within an hour. What should happen first?",
     "options": [
      {
       "text": "Rewrite the repository history so the keys disappear and close the ticket.",
       "feedback": "History rewriting hides the mistake but the keys may already be copied.",
       "best": false
      },
      {
       "text": "Wait to see whether any misuse is detected before rotating.",
       "feedback": "Waiting gives attackers time; rotation is cheap compared with a breach.",
       "best": false
      },
      {
       "text": "Treat both keys as compromised: revoke and rotate them, re-issue the certificate and review logs for their use.",
       "feedback": "Correct. Public repositories are scraped within minutes; deleting the commit does not undo exposure.",
       "best": true
      },
      {
       "text": "Encrypt the repository so that future pushes are safe.",
       "feedback": "This does nothing for keys already exposed.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Where in your environment are cryptographic keys or certificates stored today? Which one would cause the biggest problem if it leaked, and how quickly could you rotate it?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Hash function",
       "def": "A one-way function that turns data of any size into a fixed-size fingerprint."
      },
      {
       "term": "Salt",
       "def": "A unique random value added to each password before hashing to defeat precomputed attacks."
      },
      {
       "term": "Symmetric encryption",
       "def": "Encryption where the same secret key encrypts and decrypts."
      },
      {
       "term": "Asymmetric cryptography",
       "def": "Cryptography using a public key and a private key that are mathematically linked."
      },
      {
       "term": "Digital signature",
       "def": "A value created with a private key that proves who signed data and that it has not changed."
      },
      {
       "term": "Forward secrecy",
       "def": "A property where stealing a long-term key does not expose past session keys."
      },
      {
       "term": "Hardware security module (HSM)",
       "def": "A tamper-resistant device that generates, stores and uses keys without exposing them."
      },
      {
       "term": "Crypto agility",
       "def": "The ability to change algorithms and keys quickly without redesigning systems."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Choose the primitive by the goal: hashes for integrity, AEAD ciphers for confidentiality, key exchange for shared secrets, signatures for origin.",
      "Store passwords with slow, salted password hashing such as Argon2id, never fast hashes or reversible encryption.",
      "TLS 1.3 encrypts almost the whole handshake and gives forward secrecy; automate certificates as lifetimes shrink.",
      "Most failures are in key handling: vault keys, log their use, rotate them and treat leaked keys as compromised.",
      "Prepare for post-quantum now: inventory, hybrid key exchange and crypto agility."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which is the best way to store user passwords?",
       "options": [
        "A slow, salted password hashing function such as Argon2id",
        "AES encryption, with the key stored in the application configuration file",
        "SHA-256 without a salt",
        "Base64 encoding"
       ],
       "answer": 0,
       "explain": "Password hashing functions are slow and salted to resist guessing; encryption is reversible and Base64 is only encoding."
      },
      {
       "q": "What does forward secrecy protect against?",
       "options": [
        "Expired certificates",
        "Weak user passwords",
        "Decryption of past sessions after a long-term key is stolen",
        "Denial of service"
       ],
       "answer": 2,
       "explain": "Ephemeral key exchange means old session keys cannot be rebuilt from the stolen server key."
      },
      {
       "q": "A software vendor wants customers to prove an update came from them. Which primitive fits?",
       "options": [
        "Symmetric encryption",
        "Digital signature",
        "Plain SHA-256 hash published on the same page",
        "Compression"
       ],
       "answer": 1,
       "explain": "Signatures prove origin and integrity; an unsigned hash on the same compromised page proves little."
      },
      {
       "q": "Which cipher configuration should be removed from a server?",
       "options": [
        "AES-GCM suites",
        "ChaCha20-Poly1305 suites",
        "ECDHE key exchange",
        "3DES and RC4 suites"
       ],
       "answer": 3,
       "explain": "3DES and RC4 are obsolete and weak; the others are modern choices."
      },
      {
       "q": "Why start a cryptographic inventory now?",
       "options": [
        "Because inventories make TLS faster",
        "Because regulators have already banned all use of RSA keys in production today",
        "To avoid ever rotating keys",
        "To plan migration to post-quantum and replace weak algorithms"
       ],
       "answer": 3,
       "explain": "You cannot migrate what you cannot find. An inventory shows where RSA and elliptic-curve keys protect long-lived data and drives crypto agility."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m2",
 "order": 2,
 "code": "Network",
 "title": "Network Security",
 "subtitle": "Segmentation, firewalls, secure remote access, network monitoring, DNS, DDoS and wireless defence.",
 "outcomes": [
  "Design zones and segmentation that contain compromises, including for OT networks.",
  "Write and review firewall rules and configure host firewalls.",
  "Choose between VPN, ZTNA and SASE for remote and supplier access.",
  "Use flows, protocol logs and packets to detect scanning, C2 and exfiltration.",
  "Harden DNS, public services and Wi-Fi."
 ],
 "lessons": [
  {
   "id": "m2-l1",
   "title": "Secure Network Architecture and Segmentation",
   "subtitle": "Zones, trust boundaries and microsegmentation that stop one compromise becoming a disaster.",
   "minutes": 35,
   "objectives": [
    "Design security zones and define what may cross each boundary.",
    "Choose between VLAN segmentation, firewalled zones and microsegmentation.",
    "Protect operational technology networks with a layered reference model."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A flat network lets an attacker who compromises one laptop reach every server, backup system and controller. **Segmentation** divides the network into zones with different trust levels and forces traffic between them through a point where policy is enforced and logged. It is one of the most effective controls against ransomware, because it turns a single foothold into a contained incident."
    },
    {
     "type": "layers",
     "title": "Typical enterprise security zones",
     "items": [
      {
       "label": "Internet edge",
       "parts": [
        "DDoS protection",
        "Edge firewall",
        "Public DNS"
       ]
      },
      {
       "label": "DMZ / published services",
       "parts": [
        "Reverse proxy and WAF",
        "Mail gateway",
        "Public web servers"
       ]
      },
      {
       "label": "User zones",
       "parts": [
        "Staff VLANs per site",
        "Guest Wi-Fi isolated",
        "BYOD access"
       ]
      },
      {
       "label": "Server zones",
       "parts": [
        "Application tier",
        "Database tier",
        "Management tier"
       ]
      },
      {
       "label": "Restricted zones",
       "parts": [
        "Payment systems",
        "Backups",
        "Identity and PKI servers"
       ]
      },
      {
       "label": "Operational technology",
       "parts": [
        "SCADA servers",
        "Controllers",
        "Safety systems"
       ]
      }
     ]
    },
    {
     "type": "topology",
     "title": "Zones joined through one enforcement point",
     "nodes": [
      {
       "id": "inet",
       "kind": "internet",
       "label": "Internet",
       "x": 3,
       "y": 0
      },
      {
       "id": "dmz",
       "kind": "lb",
       "label": "Reverse proxy",
       "sub": "WAF, 172.16.10.0/24",
       "x": 1,
       "y": 1
      },
      {
       "id": "app",
       "kind": "server",
       "label": "App servers",
       "sub": "10.20.1.0/24",
       "x": 5,
       "y": 1
      },
      {
       "id": "db",
       "kind": "db",
       "label": "Databases",
       "sub": "10.20.2.0/24",
       "x": 6,
       "y": 1
      },
      {
       "id": "fw",
       "kind": "firewall",
       "label": "Core firewall",
       "sub": "deny by default, logs all",
       "x": 3,
       "y": 2
      },
      {
       "id": "dir",
       "kind": "server",
       "label": "Directory and PKI",
       "sub": "Tier 0",
       "x": 6,
       "y": 4
      },
      {
       "id": "users",
       "kind": "laptop",
       "label": "Staff VLANs",
       "sub": "10.10.0.0/16",
       "x": 1,
       "y": 4
      },
      {
       "id": "mgmt",
       "kind": "host",
       "label": "Jump hosts",
       "sub": "10.10.50.0/28",
       "x": 3,
       "y": 4
      },
      {
       "id": "bk",
       "kind": "storage",
       "label": "Backups",
       "sub": "backup agent only",
       "x": 5,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "inet",
       "b": "fw",
       "label": "HTTPS 443"
      },
      {
       "a": "fw",
       "b": "dmz"
      },
      {
       "a": "fw",
       "b": "app"
      },
      {
       "a": "app",
       "b": "db",
       "label": "SQL only"
      },
      {
       "a": "fw",
       "b": "users"
      },
      {
       "a": "fw",
       "b": "mgmt"
      },
      {
       "a": "fw",
       "b": "dir"
      },
      {
       "a": "fw",
       "b": "bk"
      }
     ],
     "zones": [
      {
       "label": "DMZ",
       "x": 1,
       "y": 1,
       "w": 1,
       "h": 1,
       "tone": "warn"
      },
      {
       "label": "Server zone",
       "x": 5,
       "y": 1,
       "w": 2,
       "h": 1
      },
      {
       "label": "Restricted zone",
       "x": 5,
       "y": 4,
       "w": 2,
       "h": 1,
       "tone": "accent"
      },
      {
       "label": "User zone",
       "x": 1,
       "y": 4,
       "w": 1,
       "h": 1
      },
      {
       "label": "Management",
       "x": 3,
       "y": 4,
       "w": 1,
       "h": 1,
       "tone": "good"
      }
     ],
     "caption": "Every zone reaches the others only through the firewall, so each crossing is an allow-list rule that is enforced and logged. Backups and identity sit in a restricted zone that user laptops cannot reach directly."
    },
    {
     "type": "compare",
     "title": "Segmentation approaches",
     "columns": [
      {
       "title": "VLANs with ACLs",
       "items": [
        "Cheap and familiar",
        "Coarse, often subnet-wide rules",
        "Rules drift and become 'any any'",
        "Good first step for flat networks"
       ]
      },
      {
       "title": "Firewalled zones",
       "items": [
        "Stateful inspection between zones",
        "Central logging of allowed and denied flows",
        "Clear trust boundaries",
        "Needs disciplined rule reviews"
       ]
      },
      {
       "title": "Microsegmentation",
       "items": [
        "Policy per workload or identity",
        "Follows workloads in data centres and cloud",
        "Stops east-west movement inside a zone",
        "Needs good asset and flow visibility"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Put switch, firewall, hypervisor and server management interfaces in a dedicated management zone reachable only from hardened admin workstations or jump hosts. Attackers love management interfaces because one compromise gives control of many systems.",
     "title": "Start with the management plane"
    },
    {
     "type": "steps",
     "title": "Designing segmentation from scratch",
     "items": [
      {
       "title": "Inventory assets and flows",
       "text": "Use flow logs and interviews to learn who talks to whom, on which ports."
      },
      {
       "title": "Classify by sensitivity",
       "text": "Group systems by data sensitivity and criticality, not by department."
      },
      {
       "title": "Draw zones and boundaries",
       "text": "Define each zone and the enforcement point between them."
      },
      {
       "title": "Write allow-lists",
       "text": "Allow only required flows; deny and log everything else."
      },
      {
       "title": "Migrate in phases",
       "text": "Start in monitor mode, review hits, then enforce."
      },
      {
       "title": "Review regularly",
       "text": "Remove unused rules and re-certify owners every six months."
      }
     ]
    },
    {
     "type": "table",
     "title": "Reference levels for operational technology",
     "head": [
      "Level",
      "Contents",
      "Key controls"
     ],
     "rows": [
      [
       "Enterprise (IT)",
       "Email, ERP, user devices",
       "Normal IT controls"
      ],
      [
       "Industrial DMZ",
       "Historian replica, patch server, remote access broker",
       "No direct IT-to-OT traffic; everything brokered"
      ],
      [
       "Site operations",
       "SCADA servers, engineering workstations",
       "Strict allow-lists, application control"
      ],
      [
       "Control",
       "Controllers and HMIs",
       "Change control, read-only monitoring"
      ],
      [
       "Process and safety",
       "Sensors, actuators, safety instrumented systems",
       "Physical isolation of safety systems"
      ]
     ]
    },
    {
     "type": "topology",
     "title": "IT and OT separated by an industrial DMZ",
     "nodes": [
      {
       "id": "it",
       "kind": "host",
       "label": "Enterprise IT",
       "sub": "email, ERP, analysts",
       "x": 1,
       "y": 0
      },
      {
       "id": "vendor",
       "kind": "user",
       "label": "Vendor engineer",
       "sub": "named account, MFA",
       "x": 6,
       "y": 0
      },
      {
       "id": "fw1",
       "kind": "firewall",
       "label": "IT/OT firewall",
       "x": 3,
       "y": 1
      },
      {
       "id": "hist",
       "kind": "db",
       "label": "Historian replica",
       "sub": "read by analysts",
       "x": 2,
       "y": 2
      },
      {
       "id": "broker",
       "kind": "gateway",
       "label": "Access broker",
       "sub": "per-job, recorded",
       "x": 4,
       "y": 2
      },
      {
       "id": "fw2",
       "kind": "firewall",
       "label": "OT firewall",
       "x": 3,
       "y": 3
      },
      {
       "id": "scada",
       "kind": "server",
       "label": "SCADA server",
       "x": 2,
       "y": 4
      },
      {
       "id": "ews",
       "kind": "host",
       "label": "Engineering WS",
       "sub": "only remote target",
       "x": 4,
       "y": 4
      },
      {
       "id": "plc",
       "kind": "controller",
       "label": "Controllers",
       "sub": "PLCs and HMIs",
       "x": 3,
       "y": 5
      },
      {
       "id": "sis",
       "kind": "shield",
       "label": "Safety system",
       "sub": "physically separate",
       "x": 5,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "it",
       "b": "fw1"
      },
      {
       "a": "vendor",
       "b": "broker",
       "label": "ZTNA session",
       "style": "tunnel"
      },
      {
       "a": "fw1",
       "b": "hist"
      },
      {
       "a": "fw1",
       "b": "broker"
      },
      {
       "a": "hist",
       "b": "fw2"
      },
      {
       "a": "broker",
       "b": "fw2"
      },
      {
       "a": "fw2",
       "b": "scada"
      },
      {
       "a": "fw2",
       "b": "ews"
      },
      {
       "a": "scada",
       "b": "plc"
      },
      {
       "a": "ews",
       "b": "plc"
      }
     ],
     "zones": [
      {
       "label": "Industrial DMZ",
       "x": 2,
       "y": 2,
       "w": 3,
       "h": 1,
       "tone": "warn"
      },
      {
       "label": "Site operations",
       "x": 2,
       "y": 4,
       "w": 3,
       "h": 1
      },
      {
       "label": "Control and safety",
       "x": 3,
       "y": 5,
       "w": 3,
       "h": 1,
       "tone": "bad"
      }
     ],
     "caption": "No connection runs straight from IT to OT: data is replicated into the industrial DMZ and remote sessions are brokered there, terminating only on the engineering workstation. The safety system has no network path at all."
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Engineers wanted remote access to turbine controllers from home. Instead of a direct VPN into the control network, the plant built an industrial DMZ with a remote-access broker: vendor sessions are approved per job, recorded, time-limited and can only reach specific engineering workstations, never the controllers directly.",
     "title": "A power plant near Chattogram"
    },
    {
     "type": "scenario",
     "title": "Ransomware containment",
     "situation": "A hospital's network is flat. Budget allows one segmentation project before the next audit. Which first step gives the most protection against ransomware spreading?",
     "options": [
      {
       "text": "Create a separate VLAN for every hospital department but allow all traffic between them.",
       "feedback": "VLANs without enforced policy look segmented but do not stop lateral movement.",
       "best": false
      },
      {
       "text": "Isolate backups, identity servers and clinical systems into restricted zones with allow-list rules.",
       "feedback": "Correct. Protecting recovery and crown-jewel systems first limits the worst outcomes even if user zones remain broad.",
       "best": true
      },
      {
       "text": "Block all outbound internet traffic from user laptops.",
       "feedback": "This may help with command and control, but it does not stop internal spread.",
       "best": false
      },
      {
       "text": "Move all servers to the guest Wi-Fi network for isolation.",
       "feedback": "Guest networks are less trusted, not more; this increases exposure.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Zone flow matrix",
     "purpose": "Document every allowed flow between zones so firewall rules can be checked against intent.",
     "columns": [
      "Source zone",
      "Destination zone",
      "Service / port",
      "Business reason",
      "Owner",
      "Review date"
     ],
     "example": [
      [
       "User VLAN (Dhaka)",
       "App tier",
       "HTTPS 443",
       "Staff access to ERP",
       "ERP manager",
       "Jan 2027"
      ],
      [
       "App tier",
       "Database tier",
       "TCP 5432",
       "ERP database queries",
       "DBA lead",
       "Jan 2027"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Sketch the zones of a network you know. Which flow between zones worries you most, and what single rule change would reduce that risk?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Segmentation",
       "def": "Dividing a network into zones and controlling traffic between them."
      },
      {
       "term": "Trust boundary",
       "def": "A point where data or traffic moves between areas with different trust levels."
      },
      {
       "term": "DMZ",
       "def": "A semi-trusted zone for services that must be reachable from outside."
      },
      {
       "term": "Microsegmentation",
       "def": "Fine-grained policy that controls traffic between individual workloads, even inside one zone."
      },
      {
       "term": "East-west traffic",
       "def": "Traffic moving between systems inside a network or data centre."
      },
      {
       "term": "Jump host",
       "def": "A hardened intermediate system used to reach sensitive systems for administration."
      },
      {
       "term": "Industrial DMZ",
       "def": "A buffer zone between IT and OT networks where all traffic is brokered."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Segmentation turns one compromised laptop into a contained incident instead of a network-wide one.",
      "Group systems by sensitivity and force every zone crossing through an enforced, logged allow-list.",
      "Protect the management plane, backups and identity systems first.",
      "Never connect IT directly to OT: broker data and remote access through an industrial DMZ."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Why do VLANs alone often fail as segmentation?",
       "options": [
        "VLANs cannot carry encrypted traffic",
        "VLANs only work for wireless clients",
        "Traffic between them is frequently allowed without enforced policy",
        "VLANs require public IP addresses on every host, which exposes them to the internet"
       ],
       "answer": 2,
       "explain": "Separation without enforced, logged policy does little to stop lateral movement."
      },
      {
       "q": "Which zone should host the public mail gateway?",
       "options": [
        "DMZ",
        "Restricted backup zone",
        "OT control level",
        "Management zone"
       ],
       "answer": 0,
       "explain": "Internet-facing services belong in the DMZ, not in internal or restricted zones."
      },
      {
       "q": "What is the main purpose of an industrial DMZ?",
       "options": [
        "To give vendors on the internet direct, unbrokered access to the plant's controllers",
        "To prevent direct traffic between IT and OT networks",
        "To host staff email for engineers",
        "To replace safety instrumented systems"
       ],
       "answer": 1,
       "explain": "All IT–OT exchanges are brokered through the industrial DMZ."
      },
      {
       "q": "When rolling out new zone rules, why start in monitor mode?",
       "options": [
        "To learn real flows and avoid breaking legitimate traffic",
        "Because firewalls cannot enforce new rules until they have learned traffic for a month",
        "Because monitor mode encrypts all traffic",
        "To give attackers a grace period"
       ],
       "answer": 0,
       "explain": "Observing hits first reveals missing allow rules before enforcement causes outages."
      },
      {
       "q": "What does microsegmentation add beyond zone firewalls?",
       "options": [
        "Faster internet connections",
        "Automatic patching of servers",
        "Policy between individual workloads inside the same zone",
        "Removal of all authentication between servers in the data centre"
       ],
       "answer": 2,
       "explain": "Microsegmentation controls east-west traffic at workload level."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l2",
   "title": "Firewalls, Proxies, VPN and ZTNA",
   "subtitle": "Enforce policy at the edge and inside the network, and give remote users access without exposing the whole network.",
   "minutes": 40,
   "objectives": [
    "Write and review firewall rules using least privilege.",
    "Configure host firewalls on Linux and Windows.",
    "Compare remote-access VPN with zero trust network access and SASE."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A firewall enforces which connections may exist. Modern firewalls combine **stateful inspection** (tracking each connection) with **application awareness**, user identity, TLS inspection and threat signatures. But the most common firewall weakness is not missing features; it is a **rule base** that has grown for years without review."
    },
    {
     "type": "table",
     "title": "Firewall and proxy types",
     "head": [
      "Type",
      "Decides using",
      "Typical use"
     ],
     "rows": [
      [
       "Stateless packet filter",
       "Addresses, ports, protocol per packet",
       "Router ACLs, simple edge filtering"
      ],
      [
       "Stateful firewall",
       "Connection state plus addresses and ports",
       "Zone boundaries"
      ],
      [
       "Next-generation firewall",
       "Applications, users, content, threat signatures",
       "Edge and data centre"
      ],
      [
       "Forward proxy / secure web gateway",
       "URL category, file type, user",
       "Controlling user web access"
      ],
      [
       "Reverse proxy / WAF",
       "HTTP requests to published apps",
       "Protecting web applications"
      ],
      [
       "Host firewall",
       "Local process, port and profile",
       "Every server and laptop"
      ]
     ]
    },
    {
     "type": "checklist",
     "title": "Firewall rule hygiene",
     "items": [
      "Default policy is deny, with logging",
      "Every rule has an owner, ticket and business reason",
      "No 'any' in source, destination and service together",
      "Admin services (SSH, RDP) allowed only from jump hosts",
      "Shadowed and unused rules removed after review",
      "Temporary rules have an expiry date",
      "Rule changes go through change control and peer review",
      "Configuration is backed up and compared for drift"
     ]
    },
    {
     "type": "cli",
     "title": "Linux host firewall with nftables",
     "device": "Linux host",
     "lines": [
      "# Default-deny inbound; allow established, SSH from the jump host and HTTPS",
      "nft add table inet filter",
      "nft add chain inet filter input '{ type filter hook input priority 0; policy drop; }'",
      "nft add rule inet filter input ct state established,related accept",
      "nft add rule inet filter input iif lo accept",
      "nft add rule inet filter input ip saddr 10.10.50.10 tcp dport 22 accept",
      "nft add rule inet filter input tcp dport 443 accept",
      "nft add rule inet filter input log prefix \"DROP-IN \" counter drop",
      "nft list ruleset"
     ],
     "note": "Make rules persistent through the distribution's nftables service file, and always keep a console session open when changing remote firewall rules."
    },
    {
     "type": "cli",
     "title": "Windows host firewall",
     "device": "PowerShell",
     "lines": [
      "# Allow RDP only from the admin jump host subnet",
      "New-NetFirewallRule -DisplayName 'RDP from jump hosts' -Direction Inbound -Protocol TCP -LocalPort 3389 -RemoteAddress 10.10.50.0/28 -Action Allow",
      "# Make sure no broad RDP rule remains",
      "Get-NetFirewallRule -DisplayGroup 'Remote Desktop' | Set-NetFirewallRule -Enabled False",
      "# Turn on logging of dropped packets",
      "Set-NetFirewallProfile -All -LogBlocked True -LogFileName '%systemroot%\\system32\\LogFiles\\Firewall\\pfirewall.log'"
     ]
    },
    {
     "type": "compare",
     "title": "Remote access models",
     "columns": [
      {
       "title": "Traditional VPN",
       "items": [
        "Puts the device on the internal network",
        "Broad access after login",
        "Gateway exposed to the internet and a frequent target",
        "Simple for legacy apps"
       ]
      },
      {
       "title": "Zero trust network access (ZTNA)",
       "items": [
        "Connects a user to one application, not a network",
        "Checks identity and device health per session",
        "Applications hidden behind a broker",
        "Better fit for contractors and suppliers"
       ]
      },
      {
       "title": "SASE / security service edge",
       "items": [
        "Cloud-delivered web gateway, ZTNA and firewall",
        "Same policy for office and remote users",
        "Traffic inspected close to the user",
        "Reduces backhaul to head office"
       ]
      }
     ]
    },
    {
     "type": "sequence",
     "title": "A vendor session through ZTNA",
     "actors": [
      "Vendor engineer",
      "ZTNA broker",
      "Identity provider",
      "App connector",
      "Maintenance PC"
     ],
     "steps": [
      {
       "from": 3,
       "to": 1,
       "label": "Outbound tunnel, no inbound ports",
       "note": "set up before any user arrives"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Request maintenance app"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Redirect to sign-in",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "Named account + strong MFA"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Signed identity token",
       "reply": true
      },
      {
       "from": 0,
       "to": 1,
       "label": "Token + device posture"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Policy: who, device, ticket, time"
      },
      {
       "from": 1,
       "to": 3,
       "label": "Stitch session to one app"
      },
      {
       "from": 3,
       "to": 4,
       "label": "Remote session to this PC only"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Record; end session after 2 hours"
      }
     ],
     "caption": "The factory network never accepts an inbound connection: the connector dials out, and the broker joins a verified user to one application for a limited time. Compare this with a VPN, which places the vendor's laptop on the network."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "VPN gateways, firewalls and remote-access appliances have been among the most exploited systems in recent years because they face the internet and often run privileged code. Track them against known-exploited vulnerability catalogues, patch them as emergencies when a critical flaw is announced, restrict their management interfaces, send their logs to your SIEM and plan to replace models that have reached end of support.",
     "title": "Edge devices are prime targets"
    },
    {
     "type": "scenario",
     "title": "Supplier access",
     "situation": "A garment factory's machine vendor needs to maintain embroidery machine software twice a month. They currently use a shared VPN account that reaches the whole factory network. What is the best redesign?",
     "options": [
      {
       "text": "Keep the VPN but change the shared password every year.",
       "feedback": "Annual rotation leaves a shared, broadly scoped account in place most of the time.",
       "best": false
      },
      {
       "text": "Open the maintenance port directly to the internet so the vendor does not need a VPN.",
       "feedback": "Exposing the service directly is worse; anyone on the internet can attack it.",
       "best": false
      },
      {
       "text": "Ask the vendor to sign a stronger contract and leave the access unchanged.",
       "feedback": "Contracts help with accountability but do not reduce technical exposure.",
       "best": false
      },
      {
       "text": "Give each vendor engineer a named identity with MFA and per-session ZTNA access only to the maintenance workstation.",
       "feedback": "Correct. Named, MFA-protected, application-level access removes the shared password and the broad network reach.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Firewall rule review",
     "purpose": "Re-certify each rule with its owner and decide to keep, tighten or remove it.",
     "columns": [
      "Rule ID",
      "Source",
      "Destination",
      "Service",
      "Hits (90 days)",
      "Owner",
      "Decision"
     ],
     "example": [
      [
       "FW-221",
       "Any",
       "10.20.5.14",
       "TCP 3389",
       "4",
       "Unknown",
       "Remove; replace with jump-host rule"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Think about how suppliers and remote staff reach your systems today. Which access path gives more network reach than the task requires?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Stateful inspection",
       "def": "Firewall filtering that tracks the state of each connection and allows only valid return traffic."
      },
      {
       "term": "Next-generation firewall",
       "def": "A firewall that adds application awareness, user identity and threat prevention to stateful filtering."
      },
      {
       "term": "Shadowed rule",
       "def": "A firewall rule that never matches because an earlier rule already covers its traffic."
      },
      {
       "term": "Reverse proxy",
       "def": "A server that receives client requests on behalf of back-end applications."
      },
      {
       "term": "ZTNA",
       "def": "Zero trust network access: brokered, per-application access based on identity and device checks."
      },
      {
       "term": "SASE",
       "def": "Secure access service edge: networking and security services delivered from the cloud close to users."
      },
      {
       "term": "Default deny",
       "def": "A policy that blocks all traffic unless a rule explicitly allows it."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Default deny with logging; every rule needs an owner, a reason and a review date.",
      "Allow admin protocols only from jump hosts, and remove shadowed, unused and any-any rules.",
      "ZTNA connects a verified user and device to one application; a VPN connects a device to a network.",
      "Internet-facing edge devices are prime targets: patch them as emergencies and monitor them closely."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A rule allows 'any source to any destination on any service' between two zones. What is the main problem?",
       "options": [
        "It slows the firewall's CPU slightly",
        "It disables firewall logging",
        "It is only a problem for IPv6 traffic, which most firewalls cannot inspect anyway",
        "It removes the boundary, making the zones effectively one"
       ],
       "answer": 3,
       "explain": "An any-any rule means the segmentation exists only on paper."
      },
      {
       "q": "How does ZTNA differ from a traditional VPN?",
       "options": [
        "It never requires user authentication",
        "It grants access to specific applications rather than the network",
        "It only works inside the office",
        "It exposes each internal application directly to the internet with its own public address"
       ],
       "answer": 1,
       "explain": "ZTNA connects users to individual applications after identity and device checks."
      },
      {
       "q": "In the nftables example, what happens to inbound SSH from a laptop at 10.10.20.5?",
       "options": [
        "It is dropped and logged by the final rule",
        "It is accepted because port 22 is open to all",
        "It is accepted because established traffic is allowed",
        "It is redirected to the jump host"
       ],
       "answer": 0,
       "explain": "SSH is allowed only from 10.10.50.10; other new connections hit the drop rule."
      },
      {
       "q": "Why should remote-access gateways be patched as emergencies?",
       "options": [
        "They have no logs to monitor",
        "Their patches are always optional",
        "Because users ask for faster logins",
        "They face the internet and are heavily targeted by attackers"
       ],
       "answer": 3,
       "explain": "Internet-facing edge devices are high-value, frequently exploited targets."
      },
      {
       "q": "What is a shadowed rule?",
       "options": [
        "A rule that only applies at night",
        "A rule hidden from auditors",
        "A rule that never matches because an earlier rule covers its traffic",
        "A rule that only applies to backup traffic between data centres during the night"
       ],
       "answer": 2,
       "explain": "Rule order means later, overlapping rules may never be evaluated."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l3",
   "title": "Network Monitoring: IDS, NDR, Flows and Packets",
   "subtitle": "See what is actually on the wire, and turn traffic into evidence and detections.",
   "minutes": 40,
   "objectives": [
    "Choose between full packet capture, flow records and protocol logs.",
    "Capture and filter traffic with command-line tools.",
    "Recognise network signs of scanning, command and control and exfiltration."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Endpoints can be blinded by attackers; the network rarely lies. Network security monitoring collects three kinds of data, each with different cost and detail. Most teams combine **flow records everywhere**, **protocol logs at key boundaries** and **full packet capture** only where it is worth the storage."
    },
    {
     "type": "table",
     "title": "Network data sources",
     "head": [
      "Source",
      "Detail",
      "Retention cost",
      "Best for"
     ],
     "rows": [
      [
       "Full packet capture (PCAP)",
       "Every byte",
       "Very high",
       "Deep forensics on a short window"
      ],
      [
       "Protocol / session logs",
       "DNS queries, HTTP hosts, TLS names, file hashes",
       "Medium",
       "Hunting and investigations"
      ],
      [
       "Flow records (NetFlow/IPFIX style)",
       "Who talked to whom, when, how much",
       "Low",
       "Baselines, exfiltration, lateral movement"
      ],
      [
       "IDS/IPS alerts",
       "Signature or anomaly matches",
       "Low",
       "Known-bad patterns"
      ],
      [
       "Cloud VPC flow logs",
       "Accepted and rejected flows in cloud networks",
       "Low to medium",
       "Cloud network visibility"
      ]
     ]
    },
    {
     "type": "compare",
     "title": "IDS, IPS and NDR",
     "columns": [
      {
       "title": "IDS",
       "items": [
        "Passive copy of traffic (tap or span)",
        "Alerts but does not block",
        "No risk of breaking traffic"
       ]
      },
      {
       "title": "IPS",
       "items": [
        "Inline in the traffic path",
        "Can drop malicious packets",
        "False positives can block business traffic"
       ]
      },
      {
       "title": "NDR",
       "items": [
        "Behavioural analytics over flows and metadata",
        "Finds anomalies like beaconing and unusual internal connections",
        "Works even when payloads are encrypted"
       ]
      }
     ]
    },
    {
     "type": "topology",
     "title": "Where network evidence comes from",
     "nodes": [
      {
       "id": "inet",
       "kind": "internet",
       "label": "Internet",
       "x": 3,
       "y": 0
      },
      {
       "id": "cloud",
       "kind": "cloud",
       "label": "Cloud VPCs",
       "sub": "flow logs",
       "x": 6,
       "y": 0
      },
      {
       "id": "es",
       "kind": "sensor",
       "label": "Edge sensor",
       "sub": "flows, DNS, TLS, HTTP logs",
       "x": 5,
       "y": 1
      },
      {
       "id": "fw",
       "kind": "firewall",
       "label": "Edge firewall",
       "sub": "allow and deny logs",
       "x": 3,
       "y": 2
      },
      {
       "id": "siem",
       "kind": "siem",
       "label": "SIEM",
       "x": 6,
       "y": 3
      },
      {
       "id": "srv",
       "kind": "server",
       "label": "Servers",
       "x": 1,
       "y": 4
      },
      {
       "id": "core",
       "kind": "l3switch",
       "label": "Core switch",
       "sub": "flow export",
       "x": 3,
       "y": 4
      },
      {
       "id": "is",
       "kind": "sensor",
       "label": "Internal sensor",
       "sub": "east-west NDR",
       "x": 5,
       "y": 5
      },
      {
       "id": "users",
       "kind": "laptop",
       "label": "Users",
       "x": 3,
       "y": 6
      }
     ],
     "links": [
      {
       "a": "inet",
       "b": "fw",
       "label": "1 Gbps"
      },
      {
       "a": "es",
       "b": "fw",
       "label": "tap",
       "style": "dashed"
      },
      {
       "a": "fw",
       "b": "core"
      },
      {
       "a": "core",
       "b": "srv"
      },
      {
       "a": "core",
       "b": "users"
      },
      {
       "a": "core",
       "b": "is",
       "label": "span",
       "style": "dashed"
      },
      {
       "a": "es",
       "b": "siem",
       "style": "dashed"
      },
      {
       "a": "is",
       "b": "siem",
       "style": "dashed"
      },
      {
       "a": "cloud",
       "b": "siem",
       "style": "dashed"
      }
     ],
     "caption": "Metadata from the edge sensor covers command and control and exfiltration; the internal sensor and switch flows cover lateral movement; cloud flow logs fill the gap for workloads that never cross the office network."
    },
    {
     "type": "cli",
     "title": "Capturing and filtering with tcpdump",
     "device": "Linux host",
     "lines": [
      "# Capture DNS traffic on eth0 to a file, rotating every 100 MB",
      "sudo tcpdump -i eth0 -w dns-%Y%m%d%H%M.pcap -C 100 -G 3600 port 53",
      "# Show TCP SYN packets only (possible scanning)",
      "sudo tcpdump -nn -i eth0 'tcp[tcpflags] & (tcp-syn|tcp-ack) == tcp-syn'",
      "# Read a capture and show traffic to one suspicious host",
      "tcpdump -nn -r incident.pcap host 203.0.113.45",
      "# Count top talkers from a capture",
      "tcpdump -nn -r incident.pcap -q | awk '{print $3}' | cut -d. -f1-4 | sort | uniq -c | sort -rn | head"
     ],
     "note": "Capture only where you are authorised. Packet captures can contain passwords and personal data, so store them as evidence with restricted access."
    },
    {
     "type": "packet",
     "title": "The TCP header behind the tcpdump flag filter",
     "width": 32,
     "fields": [
      {
       "label": "Source port",
       "bits": 16
      },
      {
       "label": "Destination port",
       "bits": 16
      },
      {
       "label": "Sequence number",
       "bits": 32
      },
      {
       "label": "Acknowledgment number",
       "bits": 32
      },
      {
       "label": "Data offset",
       "bits": 4
      },
      {
       "label": "Reserved",
       "bits": 4
      },
      {
       "label": "CWR",
       "bits": 1
      },
      {
       "label": "ECE",
       "bits": 1
      },
      {
       "label": "URG",
       "bits": 1
      },
      {
       "label": "ACK",
       "bits": 1
      },
      {
       "label": "PSH",
       "bits": 1
      },
      {
       "label": "RST",
       "bits": 1
      },
      {
       "label": "SYN",
       "bits": 1
      },
      {
       "label": "FIN",
       "bits": 1
      },
      {
       "label": "Window",
       "bits": 16
      },
      {
       "label": "Checksum",
       "bits": 16
      },
      {
       "label": "Urgent pointer",
       "bits": 16
      }
     ],
     "caption": "The eight flag bits fill byte 13 of the header, which is what tcp[tcpflags] (or tcp[13]) reads. A SYN scan sends packets with SYN set and ACK clear, exactly what the second capture command isolates; options, if any, follow these 20 bytes."
    },
    {
     "type": "table",
     "title": "Network signs of attack",
     "head": [
      "Behaviour",
      "What it looks like",
      "Likely tactic"
     ],
     "rows": [
      [
       "Horizontal scanning",
       "One host connecting to many hosts on the same port",
       "Discovery"
      ],
      [
       "Beaconing",
       "Small, regular connections to the same external host, often with jitter",
       "Command and control"
      ],
      [
       "Unusual admin protocols",
       "SMB, RDP or remote management from a user laptop to servers",
       "Lateral movement"
      ],
      [
       "Large outbound transfers",
       "Gigabytes to a new cloud storage or file-sharing domain at night",
       "Exfiltration"
      ],
      [
       "DNS tunnelling",
       "Many long, random-looking subdomains for one domain",
       "Command and control / exfiltration"
      ],
      [
       "Newly registered domains",
       "Connections to domains created in the last few days",
       "Phishing or C2"
      ]
     ]
    },
    {
     "type": "formula",
     "title": "Simple beaconing heuristics",
     "items": [
      {
       "name": "Interval regularity",
       "expr": "score = 1 − (standard deviation of intervals ÷ mean interval)",
       "meaning": "Close to 1 means very regular connections, typical of automated beacons."
      },
      {
       "name": "Data ratio",
       "expr": "ratio = bytes out ÷ bytes in",
       "meaning": "Much greater than 1 on a connection suggests data is being uploaded."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Even with TLS everywhere, you can see server names, certificate details, connection timing, sizes and TLS client fingerprints. These metadata are enough to spot many command-and-control channels without decrypting content.",
     "title": "Encrypted traffic still talks"
    },
    {
     "type": "chart",
     "kind": "bar",
     "title": "Outbound volume from the lab server, one week",
     "labels": [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
     ],
     "series": [
      {
       "name": "GB sent to the internet",
       "values": [
        0.8,
        0.6,
        0.9,
        12.5,
        13.1,
        12.4,
        0.7
       ]
      }
     ],
     "unit": " GB",
     "yLabel": "GB per day",
     "caption": "Illustrative flow totals matching the case below: a server that normally sends under 1 GB a day uploads about 38 GB over three nights. A per-host baseline turns this jump into an alert."
    },
    {
     "type": "case",
     "title": "Night-time uploads at a university",
     "context": "A university's flow data shows a lab server sending 38 GB to an unfamiliar cloud storage domain between 01:00 and 04:00 on three nights. The server normally sends under 1 GB per day. DNS logs show the domain was first seen two weeks ago. The lab says a researcher may be backing up data.",
     "questions": [
      "What evidence would confirm or rule out exfiltration?",
      "Which teams must be involved before acting?",
      "What immediate containment is proportionate?"
     ],
     "answer": "Check which process and account made the connections (EDR or host logs), whether the destination belongs to the university's approved cloud tenant, what files were read before each upload, and whether the researcher confirms the activity. Involve the lab owner, the data protection officer and IT operations. Proportionate containment is to block the destination at the proxy or firewall and preserve logs while the investigation runs; isolate the server if an unapproved process or account is found. Even if it is the researcher, unapproved cloud storage is a policy and data protection issue to be fixed."
    },
    {
     "type": "scenario",
     "title": "Choosing a sensor",
     "situation": "A small SOC can afford one network monitoring investment for a head office with a 1 Gbps internet link. They want to detect command and control and exfiltration. What should they deploy first?",
     "options": [
      {
       "text": "A sensor at the internet edge producing flow and protocol logs (DNS, TLS, HTTP) into the SIEM.",
       "feedback": "Correct. Edge metadata gives broad visibility of outbound C2 and exfiltration at low storage cost.",
       "best": true
      },
      {
       "text": "Full packet capture of all internal traffic kept for one year.",
       "feedback": "Far too expensive in storage, and internal traffic is not the first priority for these goals.",
       "best": false
      },
      {
       "text": "An inline IPS in blocking mode with every signature enabled.",
       "feedback": "This risks blocking business traffic and floods the team with alerts.",
       "best": false
      },
      {
       "text": "A sensor on the guest Wi-Fi only.",
       "feedback": "Guest traffic is not where the business data and servers are.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "If an attacker exfiltrated 20 GB from your network tonight, which data source would show it, and how long would it be before anyone looked?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "PCAP",
       "def": "A file format holding full captured network packets."
      },
      {
       "term": "Flow record",
       "def": "A summary of a network conversation: addresses, ports, times, packets and bytes."
      },
      {
       "term": "IDS",
       "def": "Intrusion detection system: monitors traffic and alerts on suspicious patterns."
      },
      {
       "term": "IPS",
       "def": "Intrusion prevention system: sits inline and can block malicious traffic."
      },
      {
       "term": "NDR",
       "def": "Network detection and response: behavioural analytics over network data with response actions."
      },
      {
       "term": "Beaconing",
       "def": "Regular, automated connections from malware to its command-and-control server."
      },
      {
       "term": "DNS tunnelling",
       "def": "Hiding data or commands inside DNS queries and responses."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Keep flow records everywhere, protocol logs at key boundaries and full packet capture only where it pays.",
      "IDS watches a copy, IPS sits inline and can block, NDR finds behavioural anomalies even in encrypted traffic.",
      "Scanning, beaconing, unusual admin protocols, large night-time uploads and DNS tunnelling each leave network fingerprints.",
      "Baselines per host and per destination turn raw volume into evidence."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which data source is cheapest to keep for a year while still showing who talked to whom?",
       "options": [
        "Full packet capture",
        "Flow records",
        "Memory images",
        "Screen recordings"
       ],
       "answer": 1,
       "explain": "Flow records are compact summaries of conversations."
      },
      {
       "q": "A laptop connects to 300 internal hosts on TCP 445 in two minutes. What is the most likely activity?",
       "options": [
        "Normal printing",
        "Horizontal scanning for discovery or spreading",
        "Software licence check",
        "Time synchronisation"
       ],
       "answer": 1,
       "explain": "Many hosts on one port in a short time is classic scanning."
      },
      {
       "q": "What is the main operational risk of an IPS compared with an IDS?",
       "options": [
        "It cannot see any traffic",
        "It needs no tuning at all",
        "False positives can block legitimate traffic",
        "It stores all packets forever"
       ],
       "answer": 2,
       "explain": "Being inline means wrong decisions affect business traffic."
      },
      {
       "q": "What can still be observed in TLS-encrypted command-and-control traffic?",
       "options": [
        "Server names, timing, sizes and client fingerprints",
        "The full plaintext of every command sent by the attacker's server",
        "The attacker's home address",
        "Nothing at all"
       ],
       "answer": 0,
       "explain": "Metadata remains visible and supports detection."
      },
      {
       "q": "Many long, random-looking subdomains under one domain suggest what?",
       "options": [
        "A misconfigured printer",
        "Normal content delivery traffic",
        "A time server",
        "DNS tunnelling"
       ],
       "answer": 3,
       "explain": "Encoding data into subdomain labels produces this pattern."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l4",
   "title": "DNS, Web, DDoS and Wireless Security",
   "subtitle": "Protect the services every attack touches: name resolution, web traffic, availability and the air.",
   "minutes": 35,
   "objectives": [
    "Use DNS as both a control and a detection source.",
    "Plan DDoS resilience for a public service.",
    "Secure enterprise Wi-Fi with modern authentication and rogue access point detection."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Almost every attack touches **DNS**: phishing domains, malware download sites and command-and-control servers all need names. That makes DNS one of the cheapest places to block and detect threats. The same is true of **web traffic**, while **availability** and **wireless** are frequent weak points for organisations with public services and busy campuses."
    },
    {
     "type": "table",
     "title": "DNS security controls",
     "head": [
      "Control",
      "What it does",
      "Watch out for"
     ],
     "rows": [
      [
       "Protective DNS / DNS filtering",
       "Blocks resolution of known malicious and newly registered domains",
       "Devices using their own encrypted DNS bypass it"
      ],
      [
       "DNS logging",
       "Records every query for hunting and investigations",
       "High volume; keep at least 90 days"
      ],
      [
       "DNSSEC",
       "Signs DNS records so resolvers can detect tampering",
       "Does not encrypt queries"
      ],
      [
       "Encrypted DNS (DoH/DoT)",
       "Protects query privacy on untrusted networks",
       "Can blind enterprise monitoring if unmanaged"
      ],
      [
       "Registrar lock and MFA",
       "Prevents hijacking of your own domains",
       "Often forgotten until a domain is stolen"
      ]
     ]
    },
    {
     "type": "cli",
     "title": "Investigating a suspicious domain",
     "device": "Linux host",
     "lines": [
      "# Who resolves it, and to what?",
      "dig +short invoice-portal-update.example A",
      "dig +short invoice-portal-update.example NS",
      "# Check your own domain's email and DNSSEC records",
      "dig +short example.com TXT",
      "dig +dnssec example.com SOA",
      "# Look up registration details (creation date is a strong signal)",
      "whois invoice-portal-update.example | grep -i -E 'creation|registrar'"
     ],
     "note": "Query suspicious domains from an isolated analysis host or through a resolver that will not tip off the attacker."
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Block outbound DNS (UDP/TCP 53) and known public DoH endpoints except from your approved resolvers, and manage browser and OS settings so encrypted DNS goes to your protective resolver. This keeps both privacy and visibility.",
     "title": "Enforce your resolver"
    },
    {
     "type": "steps",
     "title": "DDoS resilience for a public service",
     "items": [
      {
       "title": "Know your baseline",
       "text": "Measure normal traffic per service so attacks are recognised quickly."
      },
      {
       "title": "Use upstream scrubbing or a CDN",
       "text": "Large volumetric attacks must be absorbed before they reach your link."
      },
      {
       "title": "Protect the application layer",
       "text": "Rate limits, caching, bot management and WAF rules for HTTP floods."
      },
      {
       "title": "Remove single points of failure",
       "text": "Anycast DNS, multiple providers, autoscaling where possible."
      },
      {
       "title": "Agree runbooks with providers",
       "text": "Know who to call, what to switch and how long it takes."
      },
      {
       "title": "Exercise it",
       "text": "Test failover and communications before exam results or festival peaks."
      }
     ]
    },
    {
     "type": "topology",
     "title": "Results-day DDoS defence",
     "nodes": [
      {
       "id": "bots",
       "kind": "attacker",
       "label": "Botnet",
       "sub": "floods from many IPs",
       "x": 1,
       "y": 0
      },
      {
       "id": "users",
       "kind": "user",
       "label": "Students",
       "sub": "genuine peak demand",
       "x": 5,
       "y": 0
      },
      {
       "id": "cdn",
       "kind": "cloud",
       "label": "CDN and scrubbing",
       "sub": "absorbs, caches, filters",
       "x": 3,
       "y": 1
      },
      {
       "id": "fw",
       "kind": "firewall",
       "label": "Edge firewall",
       "sub": "accepts CDN ranges only",
       "x": 3,
       "y": 3
      },
      {
       "id": "lb",
       "kind": "lb",
       "label": "Load balancer",
       "sub": "WAF and rate limits",
       "x": 3,
       "y": 4
      },
      {
       "id": "web",
       "kind": "server",
       "label": "Results site",
       "sub": "origin address hidden",
       "x": 3,
       "y": 5
      }
     ],
     "links": [
      {
       "a": "bots",
       "b": "cdn",
       "label": "volumetric + HTTP flood",
       "style": "attack"
      },
      {
       "a": "users",
       "b": "cdn",
       "label": "HTTPS"
      },
      {
       "a": "cdn",
       "b": "fw",
       "label": "clean traffic only",
       "style": "bold"
      },
      {
       "a": "fw",
       "b": "lb"
      },
      {
       "a": "lb",
       "b": "web"
      }
     ],
     "caption": "The flood is absorbed upstream, where capacity is far larger than the board's own link, and cached pages serve genuine students. The origin accepts traffic only from the provider, so attackers cannot simply bypass the CDN."
    },
    {
     "type": "compare",
     "title": "Wi-Fi security choices",
     "columns": [
      {
       "title": "Personal (pre-shared key)",
       "items": [
        "One password for everyone",
        "Leaves the network when a staff member leaves only if rotated",
        "Fine for small guest networks with isolation"
       ]
      },
      {
       "title": "Enterprise (802.1X)",
       "items": [
        "Each user or device authenticates individually",
        "Certificate-based EAP methods resist credential theft",
        "Supports dynamic VLAN and policy assignment"
       ]
      },
      {
       "title": "Modern baseline",
       "items": [
        "WPA3 with protected management frames",
        "Client isolation on guest networks",
        "Wireless intrusion detection for rogue access points"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Attackers set up an access point with the same network name as the university or hospital Wi-Fi to capture credentials. Password-based EAP methods without server certificate validation are especially vulnerable. Configure managed devices to validate the RADIUS server certificate and prefer certificate-based authentication.",
     "title": "Evil twins on campus"
    },
    {
     "type": "sequence",
     "title": "802.1X with EAP-TLS on staff Wi-Fi",
     "actors": [
      "Laptop (supplicant)",
      "Access point",
      "RADIUS server"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Associate to staff network"
      },
      {
       "from": 1,
       "to": 0,
       "label": "EAP-Request/Identity",
       "reply": true
      },
      {
       "from": 0,
       "to": 1,
       "label": "EAP-Response/Identity"
      },
      {
       "from": 1,
       "to": 2,
       "label": "RADIUS Access-Request (EAP inside)"
      },
      {
       "from": 2,
       "to": 0,
       "label": "TLS: server certificate",
       "note": "relayed through the access point",
       "reply": true
      },
      {
       "from": 0,
       "to": 0,
       "label": "Validate server cert and name",
       "note": "an evil twin fails here"
      },
      {
       "from": 0,
       "to": 2,
       "label": "TLS: client certificate, Finished"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Access-Accept: keys + VLAN",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "EAP-Success",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "4-way handshake: session keys",
       "reply": true
      }
     ],
     "caption": "The laptop proves itself with a certificate and, just as importantly, checks the server's certificate before sending anything. RADIUS then hands the access point the keying material and the VLAN for this device."
    },
    {
     "type": "scenario",
     "title": "Exam results day",
     "situation": "A national education board publishes exam results online once a year. Last year the site went down under a mix of genuine load and a DDoS attack. What is the best preparation?",
     "options": [
      {
       "text": "Buy a bigger server for the data centre.",
       "feedback": "A bigger server cannot help if the internet link itself is saturated.",
       "best": false
      },
      {
       "text": "Block all foreign IP addresses at the firewall.",
       "feedback": "Attack traffic often comes from local botnets, and the link may still saturate.",
       "best": false
      },
      {
       "text": "Put the results site behind a CDN with DDoS scrubbing, cache the static pages and rehearse the plan with the provider.",
       "feedback": "Correct. Upstream absorption plus caching handles both real demand spikes and volumetric attacks.",
       "best": true
      },
      {
       "text": "Publish results by email instead.",
       "feedback": "Emailing millions of students creates new delivery, privacy and phishing problems.",
       "best": false
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "DNS is a cheap control point and a rich detection source.",
      "Manage encrypted DNS so it protects privacy without blinding defenders.",
      "DDoS defence is mostly upstream capacity plus application-layer controls.",
      "Use 802.1X with certificate validation for staff Wi-Fi and watch for rogue access points."
     ],
     "title": "Key takeaways"
    },
    {
     "type": "reflection",
     "prompt": "Who could change your organisation's DNS records or domain registration today, and how is that account protected?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Protective DNS",
       "def": "A resolver that refuses to resolve known malicious or high-risk domains."
      },
      {
       "term": "DNSSEC",
       "def": "Extensions that digitally sign DNS records so tampering can be detected."
      },
      {
       "term": "DNS over HTTPS (DoH)",
       "def": "Sending DNS queries inside encrypted HTTPS connections."
      },
      {
       "term": "Volumetric DDoS",
       "def": "An attack that floods network capacity with traffic."
      },
      {
       "term": "Scrubbing centre",
       "def": "A provider network that filters attack traffic before forwarding clean traffic."
      },
      {
       "term": "802.1X",
       "def": "A port-based access control standard that authenticates each user or device before network access."
      },
      {
       "term": "Evil twin",
       "def": "A rogue access point that imitates a legitimate wireless network to trap users."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What does DNSSEC provide?",
       "options": [
        "Encryption of DNS queries",
        "Protection from DDoS attacks",
        "Malware scanning of websites before users visit them",
        "Integrity and authenticity of DNS answers"
       ],
       "answer": 3,
       "explain": "DNSSEC signs records; it does not encrypt them."
      },
      {
       "q": "Why can unmanaged DNS over HTTPS be a problem for enterprises?",
       "options": [
        "It slows every web page by minutes",
        "It can bypass protective DNS and DNS logging",
        "It disables TLS certificates",
        "It is illegal in most countries"
       ],
       "answer": 1,
       "explain": "Queries sent to outside resolvers skip enterprise controls."
      },
      {
       "q": "Which control best protects a public site against a large volumetric DDoS?",
       "options": [
        "A larger local firewall",
        "Longer passwords for administrators",
        "Upstream scrubbing or CDN capacity",
        "Disabling HTTPS"
       ],
       "answer": 2,
       "explain": "Volumetric floods must be absorbed before they saturate your link."
      },
      {
       "q": "Which Wi-Fi setup best resists evil twin credential theft?",
       "options": [
        "802.1X with certificate validation and certificate-based EAP",
        "A long shared password",
        "Hiding the network name",
        "MAC address filtering on every access point in the building"
       ],
       "answer": 0,
       "explain": "Validating the server certificate stops clients from authenticating to a fake access point."
      },
      {
       "q": "A domain was registered three days ago and is linked from an invoice email. What should this suggest?",
       "options": [
        "The domain is guaranteed safe",
        "Higher risk of phishing or malware",
        "The email is from a government body",
        "Nothing; domain age is irrelevant"
       ],
       "answer": 1,
       "explain": "Newly registered domains are strongly associated with malicious campaigns."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m3",
 "order": 3,
 "code": "Identity",
 "title": "Identity and Access Security",
 "subtitle": "Identity lifecycle, phishing-resistant MFA, SSO and federation, privileged access and detecting identity attacks.",
 "outcomes": [
  "Run a joiner-mover-leaver process with access reviews for human and machine identities.",
  "Deploy MFA that resists phishing, fatigue and help-desk fraud.",
  "Secure SSO, federation tokens and app consent with conditional access.",
  "Design privileged access with tiers, PAWs, vaults and just-in-time elevation.",
  "Detect spraying, Kerberoasting and directory abuse from logs."
 ],
 "lessons": [
  {
   "id": "m3-l1",
   "title": "Identity Foundations and the Access Lifecycle",
   "subtitle": "Identity is the new perimeter: manage every human and machine identity from joiner to leaver.",
   "minutes": 30,
   "objectives": [
    "Distinguish identification, authentication, authorisation and accountability.",
    "Run a joiner-mover-leaver process with access reviews.",
    "Choose between role-based and attribute-based access control."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "When users work from anywhere and applications live in the cloud, the network edge no longer defines who can reach what. **Identity** does. Most modern breaches involve a valid account: phished, guessed, bought or left behind when someone changed jobs. Identity and access management (IAM) is therefore the control plane of a modern security programme."
    },
    {
     "type": "flow",
     "title": "The four As of access",
     "items": [
      {
       "label": "Identify",
       "text": "Claim an identity: a username, certificate or device ID."
      },
      {
       "label": "Authenticate",
       "text": "Prove the claim with one or more factors."
      },
      {
       "label": "Authorise",
       "text": "Decide what the identity may do, based on policy."
      },
      {
       "label": "Account",
       "text": "Record what was done so it can be audited."
      }
     ]
    },
    {
     "type": "table",
     "title": "Types of identity",
     "head": [
      "Identity type",
      "Examples",
      "Typical risk"
     ],
     "rows": [
      [
       "Workforce",
       "Staff, contractors, interns",
       "Phishing, leavers keeping access"
      ],
      [
       "Customer",
       "Mobile wallet users, patients, students",
       "Account takeover, credential stuffing"
      ],
      [
       "Privileged",
       "Domain, cloud and database administrators",
       "Full compromise if stolen"
      ],
      [
       "Non-human / workload",
       "Service accounts, API keys, CI/CD pipelines, cloud roles",
       "Never expire, over-privileged, secrets in code"
      ],
      [
       "Third party",
       "Suppliers, auditors, vendor support",
       "Shared accounts and weak offboarding"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "In many organisations non-human identities (service accounts, API keys, pipeline tokens, cloud roles and, increasingly, AI agents acting through tools) far outnumber staff. They rarely have MFA, often hold broad permissions and seldom have an owner. Inventory them, give each one an owner and prefer short-lived credentials over static keys.",
     "title": "Machines now outnumber people"
    },
    {
     "type": "cycle",
     "title": "Joiner-mover-leaver (JML) lifecycle",
     "center": "Each identity",
     "items": [
      {
       "label": "Joiner",
       "text": "HR record triggers a role-based starter package; never copy another user's access."
      },
      {
       "label": "Mover",
       "text": "A role change removes old access as well as adding new; this is where privilege creep happens."
      },
      {
       "label": "Periodic review",
       "text": "Managers and data owners re-certify sensitive access every quarter or half year."
      },
      {
       "label": "Leaver",
       "text": "Disable on the last working day, revoke sessions and tokens, recover devices."
      },
      {
       "label": "Orphan sweep",
       "text": "Find accounts with no matching HR record or owner and disable them."
      }
     ],
     "caption": "Access is not granted once: it is re-decided at every change in a person's working life. The mover and leaver stages fail most often, so automate them from the HR record."
    },
    {
     "type": "sequence",
     "title": "Automating JML from the HR record",
     "actors": [
      "HR system",
      "Identity governance",
      "Identity provider",
      "SaaS app"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Hire: ward nurse, starts 1 Jul"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Map role to starter package"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Create account, add groups"
      },
      {
       "from": 2,
       "to": 3,
       "label": "SCIM POST /Users"
      },
      {
       "from": 3,
       "to": 2,
       "label": "201 Created",
       "reply": true
      },
      {
       "from": 0,
       "to": 1,
       "label": "Transfer: new department"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Remove old groups, add new"
      },
      {
       "from": 2,
       "to": 3,
       "label": "SCIM PATCH group membership"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Leaver: last working day"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Disable, revoke sessions"
      },
      {
       "from": 2,
       "to": 3,
       "label": "SCIM PATCH active=false"
      }
     ],
     "caption": "HR is the source of truth and nobody types access by hand: every hire, move and exit flows through governance to the identity provider and on to each application with SCIM, so leavers lose access everywhere the same day."
    },
    {
     "type": "compare",
     "title": "Access control models",
     "columns": [
      {
       "title": "Role-based (RBAC)",
       "items": [
        "Permissions grouped into roles like 'Ward nurse'",
        "Simple to audit",
        "Role explosion when exceptions multiply"
       ]
      },
      {
       "title": "Attribute-based (ABAC)",
       "items": [
        "Decisions use attributes: department, location, device, data label",
        "Very flexible and context-aware",
        "Harder to test and explain"
       ]
      },
      {
       "title": "Discretionary / owner-managed",
       "items": [
        "Data owners grant access directly, as with file shares",
        "Fast for collaboration",
        "Hard to govern at scale"
       ]
      }
     ]
    },
    {
     "type": "cli",
     "title": "Finding stale and orphaned accounts",
     "device": "PowerShell",
     "lines": [
      "# Enabled users with no logon in 90 days (requires the AD module)",
      "Search-ADAccount -AccountInactive -TimeSpan 90.00:00:00 -UsersOnly |",
      "  Where-Object Enabled | Select-Object Name, SamAccountName, LastLogonDate",
      "# Accounts whose password never expires",
      "Get-ADUser -Filter 'PasswordNeverExpires -eq $true -and Enabled -eq $true' -Properties PasswordNeverExpires |",
      "  Select-Object SamAccountName",
      "# Members of a sensitive group, including nested members",
      "Get-ADGroupMember 'Domain Admins' -Recursive | Select-Object Name, objectClass"
     ],
     "note": "Export results to the access review so owners decide; never bulk-delete accounts without checking service dependencies."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "No single person should be able to complete a sensitive process alone. In a mobile financial service, the person who creates a merchant account should not be the person who approves its settlement limits.",
     "title": "Separation of duties"
    },
    {
     "type": "scenario",
     "title": "The mover problem",
     "situation": "An auditor at a private bank finds that a relationship manager who moved from the loans team to treasury six months ago still has loan-approval rights. What is the most effective fix?",
     "options": [
      {
       "text": "Make role changes trigger removal of the old role's access, and run quarterly reviews of sensitive entitlements.",
       "feedback": "Correct. Fixing the mover process prevents recurrence and reviews catch anything missed.",
       "best": true
      },
      {
       "text": "Remove the user's loan rights and close the finding.",
       "feedback": "This fixes one case but not the process that created it.",
       "best": false
      },
      {
       "text": "Ask the user to promise not to use the old rights.",
       "feedback": "Promises are not controls and cannot be audited.",
       "best": false
      },
      {
       "text": "Give every banker both loan and treasury rights to avoid future gaps.",
       "feedback": "This multiplies privilege and breaks separation of duties.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Access review record",
     "purpose": "Evidence that owners have re-certified who has access to sensitive systems.",
     "columns": [
      "System",
      "User",
      "Entitlement",
      "Still needed?",
      "Reviewer",
      "Action",
      "Date"
     ],
     "example": [
      [
       "Core banking",
       "r.karim",
       "Loan approval",
       "No (moved to treasury)",
       "Head of Loans",
       "Revoke",
       "15 Mar 2026"
      ]
     ],
     "rows": 8
    },
    {
     "type": "reflection",
     "prompt": "Pick one role you know, such as a nurse, teller or lecturer. List the access a new joiner in that role should get on day one, and what must be removed when they move to another team."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Authentication",
       "def": "Proving that an identity claim is genuine."
      },
      {
       "term": "Authorisation",
       "def": "Deciding what an authenticated identity is allowed to do."
      },
      {
       "term": "Accountability",
       "def": "Being able to trace actions to the identity that performed them."
      },
      {
       "term": "Privilege creep",
       "def": "The gradual build-up of access rights as people change roles without losing old access."
      },
      {
       "term": "Orphaned account",
       "def": "An account with no current owner or matching active person."
      },
      {
       "term": "RBAC",
       "def": "Role-based access control: permissions are assigned to roles and roles to users."
      },
      {
       "term": "ABAC",
       "def": "Attribute-based access control: access decisions use attributes of the user, resource and context."
      },
      {
       "term": "Non-human identity",
       "def": "An identity used by software, such as a service account, API key or workload role."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Identity is the control plane: most breaches involve a valid account that was phished, bought, guessed or forgotten.",
      "Drive joiner, mover and leaver changes from the HR record and remove old access on every move.",
      "Give every non-human identity an owner and prefer short-lived credentials.",
      "Use roles for simplicity, attributes for context, and separation of duties for sensitive processes."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which JML stage most often causes privilege creep?",
       "options": [
        "Joiner",
        "Leaver",
        "Mover",
        "Orphan sweep"
       ],
       "answer": 2,
       "explain": "Moves add new access but often forget to remove the old."
      },
      {
       "q": "A policy says 'doctors may read records of patients in their own ward, only from hospital devices'. Which model is this?",
       "options": [
        "Attribute-based access control",
        "Discretionary access control set by each data owner",
        "Mandatory password rotation",
        "Single sign-on"
       ],
       "answer": 0,
       "explain": "The decision uses attributes: role, ward, patient location and device."
      },
      {
       "q": "What should happen to a leaver's active sessions and tokens?",
       "options": [
        "Leave them to expire naturally",
        "Transfer them to the manager",
        "Convert them into a service account owned by the user's former manager",
        "Revoke them along with disabling the account"
       ],
       "answer": 3,
       "explain": "Disabling an account may not end existing sessions or refresh tokens; revoke them explicitly."
      },
      {
       "q": "Why are non-human identities a growing risk?",
       "options": [
        "They always belong to the CEO",
        "They cannot be logged by any system",
        "They are numerous, rarely use MFA and often hold broad, long-lived credentials",
        "They only exist in on-premises networks, so cloud controls cannot see or manage them at all"
       ],
       "answer": 2,
       "explain": "Machine identities are many, powerful and poorly governed."
      },
      {
       "q": "Two different staff must create and then approve a new merchant. Which principle is this?",
       "options": [
        "Least functionality",
        "Separation of duties",
        "Defence in depth",
        "Need to know"
       ],
       "answer": 1,
       "explain": "Splitting a sensitive process between people prevents one person committing fraud alone."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l2",
   "title": "Authentication and Phishing-Resistant MFA",
   "subtitle": "Passwords, factors, passkeys and the attacks that defeat weak MFA.",
   "minutes": 35,
   "objectives": [
    "Compare authentication factors and their weaknesses.",
    "Explain why some MFA methods resist phishing and others do not.",
    "Write a modern password and MFA policy."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Authentication factors fall into three families: **something you know** (password, PIN), **something you have** (phone, security key, smart card) and **something you are** (fingerprint, face). Multi-factor authentication combines two or more different families. But not all MFA is equal: attackers now routinely steal one-time codes and session cookies in real time."
    },
    {
     "type": "table",
     "title": "MFA methods ranked by phishing resistance",
     "head": [
      "Method",
      "Strength",
      "Main weakness"
     ],
     "rows": [
      [
       "Passkey (synced or device-bound) or FIDO2 security key",
       "Phishing-resistant: bound to the real website's origin",
       "Needs a planned recovery path for lost devices"
      ],
      [
       "Certificate / smart card",
       "Phishing-resistant when properly deployed",
       "PKI management overhead"
      ],
      [
       "Push with number matching",
       "Good against simple push spam",
       "Can still be phished through a real-time proxy"
      ],
      [
       "Authenticator app one-time code",
       "Better than SMS",
       "Codes can be relayed by phishing kits"
      ],
      [
       "SMS or voice code",
       "Better than password alone",
       "SIM swap, interception, relay"
      ],
      [
       "Password only",
       "Weak",
       "Phishing, reuse, spraying, stuffing"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A passkey is a key pair created per website. The private key never leaves the device, and the browser only lets it sign a challenge for the exact domain it was registered with. A look-alike domain simply cannot ask for the right signature, so there is nothing for the user to be tricked into handing over.",
     "title": "Why passkeys resist phishing"
    },
    {
     "type": "sequence",
     "title": "Signing in with a passkey",
     "actors": [
      "Authenticator",
      "Browser",
      "Website"
     ],
     "steps": [
      {
       "from": 1,
       "to": 2,
       "label": "Start sign-in"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Challenge for bank.example",
       "reply": true
      },
      {
       "from": 1,
       "to": 1,
       "label": "Origin must match bank.example"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Sign challenge for this site"
      },
      {
       "from": 0,
       "to": 0,
       "label": "User verification: PIN or face"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Signature, site-specific key",
       "reply": true
      },
      {
       "from": 1,
       "to": 2,
       "label": "Signed assertion + origin"
      },
      {
       "from": 2,
       "to": 2,
       "label": "Verify with stored public key"
      }
     ],
     "caption": "The private key never leaves the authenticator and the browser itself reports which origin asked. On a look-alike domain no matching key exists and any signature would name the wrong origin, so there is nothing to steal or relay."
    },
    {
     "type": "sequence",
     "title": "Adversary-in-the-middle phishing",
     "actors": [
      "User",
      "Phishing proxy",
      "Real sign-in",
      "Attacker"
     ],
     "steps": [
      {
       "from": 3,
       "to": 0,
       "label": "Lure: link to a look-alike domain"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Username + password"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Relays credentials"
      },
      {
       "from": 2,
       "to": 1,
       "label": "MFA challenge",
       "reply": true
      },
      {
       "from": 1,
       "to": 0,
       "label": "Shows the same MFA prompt",
       "reply": true
      },
      {
       "from": 0,
       "to": 1,
       "label": "Code typed or push approved"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Relays the code"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Session cookie issued",
       "reply": true
      },
      {
       "from": 1,
       "to": 3,
       "label": "Cookie handed over"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Replays cookie: MFA satisfied"
      },
      {
       "from": 3,
       "to": 2,
       "label": "Registers own MFA method",
       "note": "persistence"
      }
     ],
     "caption": "The proxy sits between the user and the genuine site and relays everything, so codes and push approvals are passed straight through. A passkey breaks the chain at step 6: the authenticator will not sign for the proxy's domain."
    },
    {
     "type": "compare",
     "title": "Common password attacks",
     "columns": [
      {
       "title": "Credential stuffing",
       "items": [
        "Uses username–password pairs leaked from other sites",
        "Succeeds because of password reuse",
        "Defend with MFA, breached-password checks and bot controls"
       ]
      },
      {
       "title": "Password spraying",
       "items": [
        "Tries a few common passwords against many accounts",
        "Stays under lockout thresholds",
        "Defend with banned-password lists and spray detection"
       ]
      },
      {
       "title": "Brute force / offline cracking",
       "items": [
        "Guesses many passwords for one account or a stolen hash",
        "Fast against weak hashes",
        "Defend with long passphrases and slow hashing"
       ]
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Modern password and MFA policy",
     "items": [
      "At least 15 characters when a password is the only factor; at least 8 (longer encouraged) when it is one of several factors",
      "Allow long passphrases, all printable characters and pasting, so password managers work",
      "Check new passwords against breached and banned lists",
      "No forced periodic changes unless compromise is suspected",
      "No composition rules that push users to predictable patterns",
      "MFA required for all remote, cloud and privileged access",
      "Phishing-resistant MFA (passkeys or security keys) for administrators and finance staff",
      "Number matching and rate limits on push notifications",
      "Secure, verified process for MFA reset and account recovery"
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Attackers phone the help desk pretending to be a staff member who lost their phone, and ask for an MFA reset. They research names and managers on social media and may use convincing scripts or even cloned voices. Require verification an attacker cannot easily fake, such as a video call with ID, manager approval or a call back to the number in the HR system.",
     "title": "The help desk is part of your MFA"
    },
    {
     "type": "scenario",
     "title": "MFA fatigue",
     "situation": "A finance officer at a telecoms company receives 25 push approval requests at 02:00 and finally taps 'Approve' to stop them. What is the best long-term fix?",
     "options": [
      {
       "text": "Tell staff to approve only requests during office hours.",
       "feedback": "Training helps, but tired users under pressure still make mistakes.",
       "best": false
      },
      {
       "text": "Switch everyone to SMS codes.",
       "feedback": "SMS is weaker: it can be relayed and is vulnerable to SIM swap.",
       "best": false
      },
      {
       "text": "Disable MFA at night to stop alerts.",
       "feedback": "This removes the control when attackers are most active.",
       "best": false
      },
      {
       "text": "Move finance and admin staff to phishing-resistant MFA and enable number matching and push rate limits for others.",
       "feedback": "Correct. Number matching stops blind approvals and passkeys remove the attack for high-risk users.",
       "best": true
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which group of users in your organisation would hurt most if phished? What would it take to move them to phishing-resistant MFA this year?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Multi-factor authentication (MFA)",
       "def": "Authentication that requires factors from two or more different families."
      },
      {
       "term": "Passkey",
       "def": "A FIDO credential: a per-site key pair whose private key stays on the user's device."
      },
      {
       "term": "Phishing-resistant MFA",
       "def": "MFA that cannot be relayed through a fake site because it is bound to the real origin."
      },
      {
       "term": "Adversary-in-the-middle",
       "def": "A phishing proxy that relays sign-in traffic to steal credentials and session cookies."
      },
      {
       "term": "Credential stuffing",
       "def": "Automated login attempts with credentials leaked from other services."
      },
      {
       "term": "Password spraying",
       "def": "Trying a small number of common passwords across many accounts."
      },
      {
       "term": "MFA fatigue",
       "def": "Flooding a user with push requests until they approve one."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Not all MFA is equal: codes and push approvals can be relayed in real time by phishing proxies.",
      "Passkeys and security keys are phishing-resistant because the signature is bound to the real origin.",
      "Modern password policy favours length, breached-password checks and no forced rotation.",
      "Help-desk resets and account recovery are part of the authentication system and need strong verification."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which MFA method prevents a phishing proxy from reusing the credential?",
       "options": [
        "A FIDO2 passkey bound to the real domain",
        "An SMS one-time code",
        "An authenticator app code",
        "A security question"
       ],
       "answer": 0,
       "explain": "Passkeys only sign for the registered origin, so the proxy domain gets nothing usable."
      },
      {
       "q": "Attackers try 'Winter2026!' against 4,000 accounts once each. What is this?",
       "options": [
        "Credential stuffing",
        "Offline cracking",
        "Keylogging",
        "Password spraying"
       ],
       "answer": 3,
       "explain": "A few common passwords across many accounts, staying under lockout thresholds."
      },
      {
       "q": "Why does modern guidance discourage forced 60-day password changes?",
       "options": [
        "Users make predictable small changes, weakening passwords",
        "Because passwords never need changing under any condition",
        "Because it breaks MFA",
        "Because regulators ban it"
       ],
       "answer": 0,
       "explain": "Forced rotation produces patterns like Summer1, Summer2; change on suspicion of compromise instead."
      },
      {
       "q": "After an adversary-in-the-middle attack, what does the attacker most often steal to bypass MFA?",
       "options": [
        "The user's fingerprint",
        "The session cookie",
        "The device's serial number",
        "The Wi-Fi password"
       ],
       "answer": 1,
       "explain": "The proxy captures the authenticated session cookie and replays it."
      },
      {
       "q": "What protects against help-desk MFA reset fraud?",
       "options": [
        "Resetting MFA faster",
        "Letting anyone reset MFA by email",
        "Strong identity verification such as a video call with ID or manager approval",
        "Disabling MFA for staff who travel, so they cannot be locked out and call the help desk at all"
       ],
       "answer": 2,
       "explain": "Verification that attackers cannot easily research closes the social engineering path."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l3",
   "title": "Single Sign-On, Federation and Tokens",
   "subtitle": "SAML, OpenID Connect and OAuth: how modern sign-in works, and how attackers abuse it.",
   "minutes": 35,
   "objectives": [
    "Explain how an identity provider and service providers establish trust.",
    "Distinguish SAML, OpenID Connect and OAuth 2.0 and their tokens.",
    "Defend against token theft and consent phishing with conditional access."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Single sign-on (SSO)** lets users authenticate once to an **identity provider (IdP)** and then reach many applications. It improves security when done well: one place to enforce MFA and device checks, one place to disable a leaver, one log of sign-ins. It also concentrates risk: compromise the IdP or its tokens and the attacker reaches everything."
    },
    {
     "type": "table",
     "title": "Federation protocols",
     "head": [
      "Protocol",
      "Purpose",
      "Token",
      "Typical use"
     ],
     "rows": [
      [
       "SAML 2.0",
       "Authentication and attribute exchange",
       "Signed XML assertion",
       "Enterprise web applications"
      ],
      [
       "OpenID Connect",
       "Authentication on top of OAuth 2.0",
       "ID token (JWT)",
       "Modern web and mobile sign-in"
      ],
      [
       "OAuth 2.0",
       "Delegated authorisation to APIs",
       "Access token and refresh token",
       "Apps acting on a user's behalf"
      ],
      [
       "SCIM",
       "Provisioning users and groups",
       "API calls",
       "Automatic joiner and leaver updates"
      ]
     ]
    },
    {
     "type": "sequence",
     "title": "OpenID Connect sign-in: authorisation code flow with PKCE",
     "actors": [
      "Browser",
      "App (client)",
      "Identity provider"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Open the payroll app"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Redirect: code_challenge, state",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "Authorisation request"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Sign in: MFA, device, risk",
       "reply": true
      },
      {
       "from": 0,
       "to": 2,
       "label": "Credentials or passkey"
      },
      {
       "from": 2,
       "to": 0,
       "label": "Redirect with code + state",
       "reply": true
      },
      {
       "from": 0,
       "to": 1,
       "label": "Code to registered redirect URI"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Code + code_verifier",
       "note": "back channel, never via the browser"
      },
      {
       "from": 2,
       "to": 1,
       "label": "ID, access and refresh tokens",
       "reply": true
      },
      {
       "from": 1,
       "to": 1,
       "label": "Check sig, iss, aud, exp, nonce"
      }
     ],
     "caption": "The code that passes through the browser is useless on its own: only the app holding the original code_verifier can swap it for tokens. The app must still validate the ID token before trusting who signed in."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Whoever holds a valid access or refresh token can use it, with no password or MFA prompt. Keep access tokens short-lived, store refresh tokens securely and revoke them when a user is disabled or a device is lost. Follow the OAuth 2.0 security best current practice (RFC 9700, published in 2025): authorisation code with PKCE, no implicit flow, exact redirect URI matching, and sender-constrained tokens (for example DPoP or mutual TLS) where your platform supports them.",
     "title": "Tokens are bearer credentials"
    },
    {
     "type": "cli",
     "title": "Inspecting a JSON Web Token safely",
     "device": "Python notebook",
     "lines": [
      "import base64, json",
      "token = open('captured_token.txt').read().strip()",
      "header, payload, sig = token.split('.')",
      "pad = lambda s: s + '=' * (-len(s) % 4)",
      "print(json.loads(base64.urlsafe_b64decode(pad(header))))",
      "print(json.loads(base64.urlsafe_b64decode(pad(payload))))",
      "# {'alg': 'RS256', 'kid': '...'}",
      "# {'iss': 'https://idp.example.com', 'aud': 'payroll-api', 'exp': 1781000000, 'sub': '...', 'scp': 'payroll.read'}"
     ],
     "note": "Decoding is not validating. Applications must verify the signature with the IdP's published keys and check issuer, audience and expiry. Treat captured tokens as live secrets."
    },
    {
     "type": "compare",
     "title": "Attacks on federated identity",
     "columns": [
      {
       "title": "Token theft",
       "items": [
        "Malware or phishing proxies steal session or refresh tokens",
        "Replayed from attacker infrastructure",
        "Detect unusual IP, device or impossible travel",
        "Device-code phishing tricks users into approving the attacker's session on the real sign-in page; block that flow where it is not needed"
       ]
      },
      {
       "title": "Consent phishing",
       "items": [
        "A malicious app asks the user to grant it access to mail or files",
        "No password is stolen at all",
        "Restrict user consent and review app permissions"
       ]
      },
      {
       "title": "IdP and signing key compromise",
       "items": [
        "Attacker forges assertions for any user",
        "Very hard to detect",
        "Protect signing keys in HSMs and monitor configuration changes"
       ]
      }
     ]
    },
    {
     "type": "framework",
     "title": "Conditional access signals",
     "items": [
      {
       "label": "U",
       "title": "User and group",
       "text": "Who is signing in and how privileged they are."
      },
      {
       "label": "D",
       "title": "Device",
       "text": "Managed, compliant, healthy EDR?"
      },
      {
       "label": "L",
       "title": "Location and network",
       "text": "Country, known office ranges, anonymising proxies."
      },
      {
       "label": "A",
       "title": "Application",
       "text": "Sensitivity of the target app."
      },
      {
       "label": "R",
       "title": "Risk",
       "text": "Leaked credentials, unusual behaviour, impossible travel."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "A suspicious app consent",
     "situation": "Several staff at a university granted an app called 'Exam Timetable Viewer' permission to read their mail and files. The app is not from the IT team. What should the identity team do first?",
     "options": [
      {
       "text": "Reset the passwords of affected staff and close the case.",
       "feedback": "Consent grants survive password resets; the app keeps its tokens.",
       "best": false
      },
      {
       "text": "Revoke the app's consent and tokens tenant-wide, block the app, and review what data it accessed.",
       "feedback": "Correct. Removing the grant cuts off access immediately; then investigate the data reached.",
       "best": true
      },
      {
       "text": "Email staff asking them to remove the app themselves.",
       "feedback": "Too slow and unreliable while the app is reading mail.",
       "best": false
      },
      {
       "text": "Disable MFA for the affected users while investigating.",
       "feedback": "This weakens protection and does nothing to the app's access.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "SSO application onboarding",
     "purpose": "Record the security settings of every application connected to the identity provider.",
     "columns": [
      "Application",
      "Protocol",
      "Data sensitivity",
      "MFA / device policy",
      "Provisioning",
      "Owner",
      "Token lifetime"
     ],
     "example": [
      [
       "Payroll SaaS",
       "SAML 2.0",
       "High (salary, bank details)",
       "Phishing-resistant MFA, compliant device",
       "SCIM",
       "HR director",
       "Session 8 h"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "List three applications that use single sign-on in your organisation. For each, do you know its token lifetime and who can grant third-party apps access to its data?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Identity provider (IdP)",
       "def": "A service that authenticates users and issues assertions or tokens to applications."
      },
      {
       "term": "Service provider / relying party",
       "def": "An application that trusts the identity provider's assertions or tokens."
      },
      {
       "term": "SAML assertion",
       "def": "A signed XML statement from the IdP about a user's authentication and attributes."
      },
      {
       "term": "OpenID Connect",
       "def": "An identity layer on OAuth 2.0 that issues ID tokens for sign-in."
      },
      {
       "term": "Refresh token",
       "def": "A long-lived token used to obtain new access tokens without signing in again."
      },
      {
       "term": "PKCE",
       "def": "Proof key for code exchange: protects the OAuth code flow from code interception."
      },
      {
       "term": "Consent phishing",
       "def": "Tricking users into granting a malicious application access to their data."
      },
      {
       "term": "Conditional access",
       "def": "Policies that allow, block or step up access based on user, device, location, app and risk."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "SSO concentrates control and risk: one place to enforce MFA and disable leavers, one place attackers want.",
      "SAML and OpenID Connect sign users in; OAuth 2.0 delegates API access; SCIM provisions accounts.",
      "Use the authorisation code flow with PKCE and validate signature, issuer, audience, expiry and nonce.",
      "Tokens and consent grants survive password resets: revoke them explicitly and restrict user consent."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which protocol is designed for delegated access to APIs rather than user sign-in?",
       "options": [
        "SAML 2.0",
        "SCIM",
        "Kerberos",
        "OAuth 2.0"
       ],
       "answer": 3,
       "explain": "OAuth 2.0 delegates authorisation; OpenID Connect adds sign-in on top."
      },
      {
       "q": "Why does a password reset not stop a malicious app that a user consented to?",
       "options": [
        "Password resets never work in SSO",
        "The app knows the new password automatically",
        "Consent grants are stored on the user's laptop and keep working until the laptop is reimaged",
        "The app holds its own tokens from the consent grant"
       ],
       "answer": 3,
       "explain": "OAuth grants and refresh tokens are separate from the password."
      },
      {
       "q": "What must an application check in an ID token besides the signature?",
       "options": [
        "The user's display name",
        "The size of the token in bytes",
        "Issuer, audience and expiry",
        "The browser version only"
       ],
       "answer": 2,
       "explain": "A valid signature on a token meant for another app or already expired must still be rejected."
      },
      {
       "q": "What is the main risk of a compromised IdP signing key?",
       "options": [
        "Attackers can forge sign-ins for any user and application",
        "Users must type passwords twice",
        "The IdP becomes slower",
        "Only the one application that uses the key for token encryption is affected"
       ],
       "answer": 0,
       "explain": "The key is the root of trust for every federated app."
      },
      {
       "q": "Which signal would most justify blocking a sign-in to payroll?",
       "options": [
        "A managed device from the head office network",
        "An unmanaged device from an anonymising proxy",
        "A sign-in during normal working hours",
        "A user who passed phishing-resistant MFA"
       ],
       "answer": 1,
       "explain": "Unmanaged device plus anonymising network is high risk for a sensitive app."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l4",
   "title": "Privileged Access Management",
   "subtitle": "Protect the accounts that can change everything: tiering, vaults, just-in-time access and break-glass.",
   "minutes": 35,
   "objectives": [
    "Design an administrative tier model and privileged access workstations.",
    "Implement vaulting, session recording and just-in-time elevation.",
    "Control service accounts, local admin passwords and emergency access."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Attackers chase privilege because privileged accounts turn a foothold into control of the whole environment. **Privileged access management (PAM)** reduces how many privileged accounts exist, how long privilege lasts, where it can be used and how closely it is watched."
    },
    {
     "type": "layers",
     "title": "An administrative tier model",
     "items": [
      {
       "label": "Tier 0: Identity control plane",
       "parts": [
        "Directory and identity provider",
        "PKI and signing keys",
        "Cloud tenant global admins"
       ]
      },
      {
       "label": "Tier 1: Servers and applications",
       "parts": [
        "Server administrators",
        "Database administrators",
        "Cloud subscription owners"
       ]
      },
      {
       "label": "Tier 2: User devices",
       "parts": [
        "Help desk",
        "Desktop support",
        "Device management operators"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "If a Tier 0 administrator logs on to an ordinary laptop, their credentials can be stolen from that laptop's memory. The rule is simple: higher-tier accounts never sign in to lower-tier systems. Use separate admin accounts and dedicated privileged access workstations (PAWs).",
     "title": "Credentials flow downhill, risk flows uphill"
    },
    {
     "type": "topology",
     "title": "Tiers, admin paths and the path to avoid",
     "nodes": [
      {
       "id": "paw0",
       "kind": "host",
       "label": "Tier 0 PAW",
       "sub": "Tier 0 admin account",
       "x": 1,
       "y": 0
      },
      {
       "id": "dc",
       "kind": "server",
       "label": "DCs, IdP, PKI",
       "sub": "identity control plane",
       "x": 4,
       "y": 0
      },
      {
       "id": "paw1",
       "kind": "host",
       "label": "Tier 1 PAW",
       "sub": "server admin account",
       "x": 1,
       "y": 2
      },
      {
       "id": "pam",
       "kind": "vault",
       "label": "PAM broker",
       "sub": "JIT, vault, recording",
       "x": 3,
       "y": 2
      },
      {
       "id": "srv",
       "kind": "server",
       "label": "App servers",
       "x": 5,
       "y": 2
      },
      {
       "id": "help",
       "kind": "user",
       "label": "Help desk",
       "sub": "Tier 2 account",
       "x": 1,
       "y": 4
      },
      {
       "id": "lap",
       "kind": "laptop",
       "label": "Staff laptops",
       "sub": "easiest to compromise",
       "x": 4,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "paw0",
       "b": "dc",
       "label": "admin only from PAW",
       "style": "bold"
      },
      {
       "a": "paw1",
       "b": "pam",
       "label": "check-out"
      },
      {
       "a": "pam",
       "b": "srv",
       "label": "recorded session"
      },
      {
       "a": "help",
       "b": "lap",
       "label": "remote support"
      },
      {
       "a": "lap",
       "b": "dc",
       "label": "Tier 0 logon here = stolen keys",
       "style": "attack"
      }
     ],
     "zones": [
      {
       "label": "Tier 0: identity control plane",
       "x": 1,
       "y": 0,
       "w": 6,
       "h": 1,
       "tone": "bad"
      },
      {
       "label": "Tier 1: servers and apps",
       "x": 1,
       "y": 2,
       "w": 6,
       "h": 1,
       "tone": "warn"
      },
      {
       "label": "Tier 2: user devices",
       "x": 1,
       "y": 4,
       "w": 6,
       "h": 1
      }
     ],
     "caption": "Administration flows only downward from a dedicated workstation in the same tier. The red path is the one to prevent: a Tier 0 account signing in to a laptop leaves credentials where attackers can most easily take them."
    },
    {
     "type": "framework",
     "title": "PAM capabilities",
     "items": [
      {
       "label": "V",
       "title": "Vault",
       "text": "Store privileged passwords and keys; check out with approval; rotate after use."
      },
      {
       "label": "J",
       "title": "Just-in-time",
       "text": "Grant admin rights for a set time window, then remove them automatically."
      },
      {
       "label": "S",
       "title": "Session control",
       "text": "Broker and record admin sessions; block risky commands."
      },
      {
       "label": "D",
       "title": "Discovery",
       "text": "Find privileged accounts, local admins and service accounts across systems."
      },
      {
       "label": "A",
       "title": "Analytics",
       "text": "Alert on unusual privileged activity."
      }
     ]
    },
    {
     "type": "sequence",
     "title": "Just-in-time elevation with approval",
     "actors": [
      "Admin",
      "PAM / JIT service",
      "Approver",
      "Directory"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Request Domain Admins, 2 h",
       "note": "linked to change ticket"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Approve? reason, ticket"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Approved",
       "reply": true
      },
      {
       "from": 1,
       "to": 3,
       "label": "Add to group, TTL 2 h"
      },
      {
       "from": 1,
       "to": 0,
       "label": "Granted, session recorded",
       "reply": true
      },
      {
       "from": 0,
       "to": 3,
       "label": "Admin work from the PAW"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Time limit reached"
      },
      {
       "from": 1,
       "to": 3,
       "label": "Remove from group"
      },
      {
       "from": 1,
       "to": 1,
       "label": "Rotate vaulted password, log"
      }
     ],
     "caption": "Privilege exists only for the approved window and disappears automatically; the vault rotates any credential that was used, so nothing useful is left behind for an attacker."
    },
    {
     "type": "cli",
     "title": "Checking local admins and privileged groups",
     "device": "PowerShell",
     "lines": [
      "# Who is in the local Administrators group on this server?",
      "Get-LocalGroupMember -Group 'Administrators'",
      "# Recently changed members of sensitive domain groups",
      "Get-ADGroup -Filter \"Name -like '*Admin*'\" -Properties whenChanged |",
      "  Sort-Object whenChanged -Descending | Select-Object Name, whenChanged -First 10",
      "# Service accounts with SPNs (targets for Kerberoasting)",
      "Get-ADUser -Filter 'ServicePrincipalName -like \"*\"' -Properties ServicePrincipalName, PasswordLastSet |",
      "  Select-Object SamAccountName, PasswordLastSet"
     ]
    },
    {
     "type": "cli",
     "title": "Limiting sudo on a Linux server",
     "device": "Linux host",
     "lines": [
      "# /etc/sudoers.d/dbadmins: allow only specific commands, with logging",
      "Defaults:%dbadmins log_output, logfile=/var/log/sudo-dbadmins.log",
      "%dbadmins ALL=(postgres) /usr/bin/psql, /usr/bin/pg_dump",
      "# Validate syntax before saving",
      "visudo -cf /etc/sudoers.d/dbadmins",
      "# Review who used sudo recently",
      "journalctl _COMM=sudo --since '24 hours ago' | tail -n 20"
     ]
    },
    {
     "type": "table",
     "title": "Service account controls",
     "head": [
      "Problem",
      "Control"
     ],
     "rows": [
      [
       "Password never changes",
       "Use managed service accounts or workload identities with automatic rotation"
      ],
      [
       "Interactive logon allowed",
       "Deny interactive and remote desktop logon rights"
      ],
      [
       "Domain admin for convenience",
       "Grant only the rights the application needs"
      ],
      [
       "Shared by many applications",
       "One account per application, with a named owner"
      ],
      [
       "Weak password with an SPN",
       "Long random password (25+ characters) and AES-only Kerberos"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Keep two emergency cloud and directory accounts that are excluded from normal conditional access, protected by phishing-resistant keys stored in a safe, monitored with an alert on every sign-in, and tested every quarter. Without them, an identity provider outage can lock everyone out.",
     "title": "Plan break-glass accounts"
    },
    {
     "type": "scenario",
     "title": "The always-on domain admin",
     "situation": "A manufacturing company has seven permanent Domain Admins, and two of them read email and browse the web with those same accounts. Which change reduces risk the most?",
     "options": [
      {
       "text": "Force the seven admins to change passwords every 30 days.",
       "feedback": "Rotation does little if credentials are exposed on everyday machines every day.",
       "best": false
      },
      {
       "text": "Rename the Domain Admins group to something less obvious.",
       "feedback": "Attackers enumerate group membership by its identifier, not by the friendly name.",
       "best": false
      },
      {
       "text": "Create separate admin accounts used only from PAWs, and move to just-in-time membership of Domain Admins.",
       "feedback": "Correct. Separation removes credential exposure on everyday devices, and JIT reduces standing privilege.",
       "best": true
      },
      {
       "text": "Install a second antivirus product on the admins' laptops.",
       "feedback": "This does not address standing privilege or credential exposure.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "Hospital privileged access clean-up",
     "context": "A 600-bed hospital in Dhaka finds 41 accounts with domain-wide admin rights, including former contractors, a shared 'itadmin' account used by the night shift, and service accounts for the lab system with passwords unchanged since 2017. Biomedical device vendors connect with the shared account.",
     "questions": [
      "What would you do in the first 30 days?",
      "How would you handle the night shift's need for urgent admin work?",
      "How would you deal with the lab system's service accounts without breaking clinical services?"
     ],
     "answer": "First 30 days: disable former contractor accounts, put the shared account into a vault with check-out approval and rotation, give vendors named accounts with brokered and recorded sessions, and reduce domain admins to a small set with just-in-time elevation. For the night shift, define emergency elevation through the PAM tool with approval by the on-call lead, plus a break-glass procedure that alerts security. For the lab service accounts, map dependencies with the vendor, then move to managed or rotated passwords in a planned change window with rollback, deny interactive logon immediately and monitor their use in the meantime."
    },
    {
     "type": "reflection",
     "prompt": "How many accounts in your environment have permanent administrative rights? Which of them could move to just-in-time elevation first?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Privileged access management (PAM)",
       "def": "Controls and tools that discover, limit, broker and monitor privileged access."
      },
      {
       "term": "Tier model",
       "def": "Separating administrative control into tiers so higher-tier credentials never touch lower-tier systems."
      },
      {
       "term": "Privileged access workstation (PAW)",
       "def": "A hardened device used only for administrative tasks."
      },
      {
       "term": "Just-in-time access",
       "def": "Granting privileges only for a limited time when needed, then removing them."
      },
      {
       "term": "Credential vault",
       "def": "A secure store where privileged credentials are checked out, recorded and rotated."
      },
      {
       "term": "Break-glass account",
       "def": "An emergency account for use when normal access paths fail, tightly protected and monitored."
      },
      {
       "term": "Standing privilege",
       "def": "Administrative rights that are always active, whether or not they are being used."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Reduce how many privileged accounts exist, how long privilege lasts and where it can be used.",
      "Higher-tier accounts never sign in to lower-tier systems; administer from dedicated PAWs.",
      "Prefer just-in-time elevation, vaulting and recorded sessions over standing admin rights.",
      "Tame service accounts and keep tested, monitored break-glass accounts for emergencies."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Why should a Tier 0 admin never sign in to a normal staff laptop?",
       "options": [
        "Laptops cannot run admin tools",
        "It breaks the laptop's warranty",
        "Their credentials could be stolen from that laptop and reused against the directory",
        "Staff laptops do not support Kerberos, so the admin's password would be sent in clear text to the directory"
       ],
       "answer": 2,
       "explain": "Lower-tier systems are easier to compromise; credentials left there expose Tier 0."
      },
      {
       "q": "What best reduces standing privilege?",
       "options": [
        "Renaming admin groups",
        "Just-in-time elevation with automatic removal",
        "Longer admin passwords",
        "Sharing one admin account whose password is changed every week"
       ],
       "answer": 1,
       "explain": "JIT means privilege exists only when needed."
      },
      {
       "q": "Which service account setting most reduces Kerberoasting risk?",
       "options": [
        "A long random password and AES-only encryption",
        "Allowing interactive logon",
        "Adding it to Domain Admins",
        "A password that never changes"
       ],
       "answer": 0,
       "explain": "Strong random passwords make cracked service tickets impractical."
      },
      {
       "q": "What is a key protection for break-glass accounts?",
       "options": [
        "Using them daily so they stay active",
        "Sharing the password widely across the IT team so that it is never lost in an emergency",
        "Removing all MFA from them",
        "Alerting on every sign-in and testing them regularly"
       ],
       "answer": 3,
       "explain": "Emergency accounts must be rare, watched and known to work."
      },
      {
       "q": "What does session recording in PAM provide?",
       "options": [
        "Faster network speeds",
        "Automatic patching",
        "Accountability and evidence for privileged actions",
        "Encryption of all user email sent during admin sessions"
       ],
       "answer": 2,
       "explain": "Recordings show exactly what an admin or vendor did."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l5",
   "title": "Directory Attacks and Identity Threat Detection",
   "subtitle": "How attackers abuse directories and how to see them in sign-in and event logs.",
   "minutes": 40,
   "objectives": [
    "Recognise common attacks against directories and Kerberos.",
    "Use Windows event IDs and sign-in logs to detect identity attacks.",
    "Prioritise identity hardening actions."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Once inside, attackers rarely need exploits. They **use the identity system as designed**: request tickets, read directory data, reuse hashes and tokens, register new MFA methods and add themselves to groups. **Identity threat detection and response (ITDR)** tools specialise in spotting this, but every one of them depends on the logs in this lesson, so understand what they record and what abnormal looks like."
    },
    {
     "type": "table",
     "title": "Common directory and identity attacks",
     "head": [
      "Attack",
      "What happens",
      "Key evidence"
     ],
     "rows": [
      [
       "Password spraying",
       "Few passwords tried against many accounts",
       "Many failed logons (4625 / sign-in failures) across users from one source"
      ],
      [
       "Kerberoasting",
       "Request service tickets and crack them offline",
       "Spike in 4769 requests, often with RC4 encryption (0x17)"
      ],
      [
       "AS-REP roasting",
       "Target accounts without Kerberos pre-authentication",
       "4768 events for accounts with pre-auth disabled"
      ],
      [
       "Pass-the-hash / ticket",
       "Reuse stolen hashes or tickets without the password",
       "Logons from unusual hosts, NTLM where Kerberos expected"
      ],
      [
       "Directory replication abuse",
       "Pretend to be a domain controller to pull password hashes",
       "Replication requests (4662 with replication rights) from non-DC hosts"
      ],
      [
       "Forged tickets",
       "Use the stolen KRBTGT key to mint tickets",
       "Tickets with abnormal lifetimes; activity with no matching TGT request"
      ],
      [
       "Privileged group changes",
       "Add an account to an admin group",
       "4728 / 4732 / 4756 member added events"
      ]
     ]
    },
    {
     "type": "topology",
     "title": "Attack path: phished PC to domain compromise",
     "nodes": [
      {
       "id": "atk",
       "kind": "attacker",
       "label": "Attacker",
       "sub": "phishing email",
       "x": 1,
       "y": 0
      },
      {
       "id": "crack",
       "kind": "process",
       "label": "Offline cracking",
       "sub": "attacker's own GPUs",
       "x": 3,
       "y": 0
      },
      {
       "id": "ws",
       "kind": "laptop",
       "label": "Accounts PC",
       "sub": "user on leave",
       "x": 1,
       "y": 2
      },
      {
       "id": "dc",
       "kind": "server",
       "label": "Domain controller",
       "sub": "logs 4769, 4662",
       "x": 5,
       "y": 2
      },
      {
       "id": "sql",
       "kind": "server",
       "label": "SQL server",
       "sub": "svc_sql is local admin",
       "x": 3,
       "y": 4
      }
     ],
     "links": [
      {
       "a": "atk",
       "b": "ws",
       "label": "foothold",
       "style": "attack"
      },
      {
       "a": "ws",
       "b": "crack",
       "label": "tickets out",
       "style": "attack"
      },
      {
       "a": "ws",
       "b": "dc",
       "label": "140 RC4 ticket requests",
       "style": "attack"
      },
      {
       "a": "ws",
       "b": "sql",
       "label": "logon as svc_sql",
       "style": "attack"
      },
      {
       "a": "sql",
       "b": "dc",
       "label": "DCSync as admin",
       "style": "attack"
      }
     ],
     "zones": [
      {
       "label": "Corporate domain",
       "x": 1,
       "y": 2,
       "w": 5,
       "h": 3,
       "tone": "warn"
      }
     ],
     "caption": "No exploit is used: the attacker requests service tickets, cracks a weak service password offline, uses it where a domain admin was logged on and then asks a DC for password hashes. Each hop leaves an event an analyst can alert on."
    },
    {
     "type": "table",
     "title": "Windows events every analyst should know",
     "head": [
      "Event ID",
      "Meaning"
     ],
     "rows": [
      [
       "4624 / 4625",
       "Successful / failed logon (check logon type: 2 interactive, 3 network, 10 remote interactive)"
      ],
      [
       "4648",
       "Logon with explicit credentials (for example run-as)"
      ],
      [
       "4672",
       "Special privileges assigned to a new logon (admin-equivalent)"
      ],
      [
       "4720 / 4726",
       "User account created / deleted"
      ],
      [
       "4768 / 4769 / 4771",
       "Kerberos TGT request / service ticket request / pre-auth failure"
      ],
      [
       "4776",
       "NTLM credential validation"
      ],
      [
       "1102",
       "Security log cleared"
      ]
     ]
    },
    {
     "type": "cli",
     "title": "Hunting password spraying",
     "device": "SIEM query (pipe syntax)",
     "lines": [
      "SecurityEvents",
      "| where EventID == 4625 and TimeGenerated > ago(1d)",
      "| summarize Failures = count(), Users = dcount(TargetUserName) by IpAddress, bin(TimeGenerated, 15m)",
      "| where Users > 20 and Failures < Users * 3",
      "| order by Users desc"
     ],
     "note": "Many distinct users with few failures each is the spraying signature. Check whether any of those users then had a successful logon from the same address."
    },
    {
     "type": "cli",
     "title": "Hunting Kerberoasting",
     "device": "SIEM query (pipe syntax)",
     "lines": [
      "SecurityEvents",
      "| where EventID == 4769 and TicketEncryptionType == '0x17'",
      "| where ServiceName !endswith '$' and ServiceName != 'krbtgt'",
      "| summarize Services = dcount(ServiceName) by TargetUserName, IpAddress, bin(TimeGenerated, 1h)",
      "| where Services > 5"
     ]
    },
    {
     "type": "cli",
     "title": "Quick checks on a Windows host",
     "device": "PowerShell",
     "lines": [
      "# Last 20 failed logons with source address",
      "Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4625} -MaxEvents 20 |",
      "  ForEach-Object { $x=[xml]$_.ToXml(); [pscustomobject]@{Time=$_.TimeCreated;",
      "    User=($x.Event.EventData.Data | ? Name -eq 'TargetUserName').'#text';",
      "    Src=($x.Event.EventData.Data | ? Name -eq 'IpAddress').'#text'} }"
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Create a decoy service account with an attractive name and an SPN but no real use. Any ticket request for it is almost certainly malicious, giving a high-confidence Kerberoasting alert with almost no false positives.",
     "title": "Make attackers trip over honey"
    },
    {
     "type": "tree",
     "title": "Attack tree: becoming domain admin",
     "root": {
      "label": "Goal: domain admin",
      "text": "Any branch succeeds",
      "children": [
       {
        "label": "Steal admin credentials",
        "children": [
         {
          "label": "Kerberoast a service account",
          "text": "Cut: long random passwords, AES only"
         },
         {
          "label": "Dump memory where an admin logged on",
          "text": "Cut: tiering, PAWs"
         }
        ]
       },
       {
        "label": "Abuse directory rights",
        "children": [
         {
          "label": "Add self to an admin group",
          "text": "Detect: 4728 / 4732 / 4756"
         },
         {
          "label": "Replicate hashes (DCSync)",
          "text": "Detect: 4662 from a non-DC"
         }
        ]
       },
       {
        "label": "Forge tickets",
        "children": [
         {
          "label": "Golden ticket from KRBTGT",
          "text": "Cut: rotate KRBTGT twice"
         }
        ]
       },
       {
        "label": "Phish an admin directly",
        "children": [
         {
          "label": "Proxy-phish cloud admin",
          "text": "Cut: phishing-resistant MFA"
         }
        ]
       }
      ]
     },
     "caption": "Attack trees list every route to one goal. Hardening work is prioritised by how many branches it cuts, and detections are placed on the branches you cannot cut."
    },
    {
     "type": "steps",
     "title": "Identity hardening priorities",
     "items": [
      {
       "title": "Protect Tier 0",
       "text": "Few admins, PAWs, no Tier 0 logons on lower tiers."
      },
      {
       "title": "Kill legacy authentication",
       "text": "Disable protocols that cannot do MFA and restrict NTLM where possible."
      },
      {
       "title": "Fix service accounts",
       "text": "Long random passwords, managed accounts, AES only. Platform vendors are moving to disable RC4 for Kerberos by default, so find accounts and devices that still need it and check your platform's current timetable."
      },
      {
       "title": "Rotate KRBTGT",
       "text": "Twice, with replication time between, after a suspected domain compromise and on a schedule."
      },
      {
       "title": "Monitor key events",
       "text": "Group changes, replication requests from non-DCs, log clearing."
      },
      {
       "title": "Rotate local admin passwords",
       "text": "Unique, automatically rotated local admin passwords on every machine."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Ticket storm",
     "situation": "At 03:10 a workstation in accounts requests service tickets for 140 different services within ten minutes, all using RC4. The user is on leave. What should the analyst do first?",
     "options": [
      {
       "text": "Ignore it because Kerberos ticket requests are normal.",
       "feedback": "Ticket requests are normal; 140 RC4 requests at 03:10 from an absent user's machine are not.",
       "best": false
      },
      {
       "text": "Treat it as likely Kerberoasting: isolate the workstation, disable the user's account, and identify which service accounts need password resets.",
       "feedback": "Correct. The pattern is high-confidence; containment and resetting exposed service account passwords limit offline cracking value.",
       "best": true
      },
      {
       "text": "Reset the user's password and wait for further alerts.",
       "feedback": "The attacker may already hold tickets to crack offline; service accounts are the real exposure.",
       "best": false
      },
      {
       "text": "Disable Kerberos across the domain.",
       "feedback": "This would break authentication for the whole organisation.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Which identity attack in this lesson would your current logging miss? What log source or setting would you enable first to see it?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Kerberoasting",
       "def": "Requesting Kerberos service tickets for accounts with SPNs and cracking them offline to recover passwords."
      },
      {
       "term": "Service principal name (SPN)",
       "def": "An identifier that links a service to the account that runs it in Kerberos."
      },
      {
       "term": "Pass-the-hash",
       "def": "Authenticating with a stolen password hash instead of the password."
      },
      {
       "term": "KRBTGT account",
       "def": "The account whose key signs Kerberos tickets in a Windows domain."
      },
      {
       "term": "Golden ticket",
       "def": "A forged Kerberos ticket made with the stolen KRBTGT key."
      },
      {
       "term": "Logon type",
       "def": "A code in logon events showing how a logon happened, such as interactive, network or remote interactive."
      },
      {
       "term": "Honey account",
       "def": "A decoy account whose use signals malicious activity."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Attackers abuse identity systems as designed: tickets, replication, group changes and stolen tokens.",
      "Know the key events: 4624/4625, 4672, 4768/4769, 4662 and 4728/4732/4756, plus cloud sign-in logs.",
      "Spraying, Kerberoasting and DCSync each have a recognisable log signature; honey accounts give near-certain alerts.",
      "Harden in the order that cuts the most attack paths: Tier 0, legacy authentication, service accounts, KRBTGT."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which event ID records a Kerberos service ticket request?",
       "options": [
        "4769",
        "4625",
        "1102",
        "4720"
       ],
       "answer": 0,
       "explain": "4769 is a service ticket request; 4625 is a failed logon."
      },
      {
       "q": "Many users with one or two failed logons each from one IP in 15 minutes suggests what?",
       "options": [
        "A normal Monday morning",
        "Kerberoasting",
        "A forged ticket",
        "Password spraying"
       ],
       "answer": 3,
       "explain": "Spraying spreads attempts thinly across accounts."
      },
      {
       "q": "Which detection is high-confidence with very few false positives?",
       "options": [
        "All failed logons",
        "Any ticket request for a decoy service account",
        "All logons by any user outside normal office hours",
        "Every NTLM authentication"
       ],
       "answer": 1,
       "explain": "Nobody legitimate uses a honey account."
      },
      {
       "q": "After a suspected domain compromise, how should the KRBTGT password be reset?",
       "options": [
        "Twice, allowing replication between resets",
        "Once, immediately, then never again",
        "It cannot be reset",
        "By deleting the account"
       ],
       "answer": 0,
       "explain": "Two resets invalidate both the current and previous keys used to validate tickets."
      },
      {
       "q": "Replication requests from a normal workstation most likely indicate what?",
       "options": [
        "A routine software update",
        "An attacker pulling password hashes from the directory",
        "A network printer adding itself to the domain after a firmware update",
        "Normal user sign-in"
       ],
       "answer": 1,
       "explain": "Only domain controllers should replicate directory data."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m4",
 "order": 4,
 "code": "Harden",
 "title": "Endpoint, Email and Vulnerability Management",
 "subtitle": "Secure baselines, EDR and triage, email authentication and fraud controls, and risk-based vulnerability management.",
 "outcomes": [
  "Apply and measure secure baselines on Windows and Linux endpoints.",
  "Triage a suspicious endpoint with EDR and built-in commands.",
  "Deploy SPF, DKIM and DMARC and stop business email compromise.",
  "Run a vulnerability management programme with risk-based priorities and SLAs."
 ],
 "lessons": [
  {
   "id": "m4-l1",
   "title": "Endpoint Hardening and Secure Baselines",
   "subtitle": "Shrink the attack surface of every laptop and server before attackers arrive.",
   "minutes": 35,
   "objectives": [
    "Build and enforce a secure configuration baseline for Windows and Linux.",
    "Apply application control, macro restrictions and least privilege on endpoints.",
    "Measure baseline drift and handle exceptions."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most endpoint compromises exploit **defaults**: local admin rights for every user, macros enabled, unnecessary services running, remote access open, no disk encryption. **Hardening** means applying a documented secure baseline, based on widely published benchmark guidance and your own needs, then checking continuously that machines stay on it."
    },
    {
     "type": "table",
     "title": "Baseline essentials",
     "head": [
      "Area",
      "Windows example",
      "Linux example"
     ],
     "rows": [
      [
       "Accounts",
       "No daily local admin rights; unique rotated local admin password",
       "No direct root login; sudo with named accounts"
      ],
      [
       "Attack surface",
       "Disable unused services and legacy protocols such as SMBv1",
       "Remove unused packages; disable unneeded services"
      ],
      [
       "Application control",
       "Allow-list approved software; block scripts from user folders",
       "Mount /tmp noexec where practical; restrict compilers on servers"
      ],
      [
       "Office and browser",
       "Keep the default block on macros in internet files; allow only signed macros from trusted locations",
       "Browser policy for desktops; block unapproved extensions"
      ],
      [
       "Encryption",
       "Full-disk encryption with recovery keys escrowed",
       "LUKS on laptops and sensitive servers"
      ],
      [
       "Logging",
       "Process creation with command line, PowerShell script block logging",
       "auditd rules, journald forwarding"
      ],
      [
       "Remote access",
       "RDP only from jump hosts, network level authentication",
       "SSH keys only, no password authentication"
      ]
     ]
    },
    {
     "type": "cli",
     "title": "Hardening SSH on a Linux server",
     "device": "Linux host",
     "lines": [
      "# /etc/ssh/sshd_config.d/50-hardening.conf",
      "PermitRootLogin no",
      "PasswordAuthentication no",
      "KbdInteractiveAuthentication no",
      "MaxAuthTries 3",
      "AllowGroups ssh-admins",
      "# Test, then reload without dropping your session",
      "sudo sshd -t && sudo systemctl reload sshd",
      "# Check which services listen on the network",
      "sudo ss -tulpn"
     ]
    },
    {
     "type": "cli",
     "title": "Checking a Windows endpoint",
     "device": "PowerShell",
     "lines": [
      "# Is the disk encrypted?",
      "Get-BitLockerVolume | Select-Object MountPoint, ProtectionStatus, EncryptionPercentage",
      "# Is SMBv1 disabled?",
      "Get-SmbServerConfiguration | Select-Object EnableSMB1Protocol",
      "# Which users are local administrators?",
      "Get-LocalGroupMember Administrators",
      "# Is PowerShell script block logging on?",
      "Get-ItemProperty 'HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\PowerShell\\ScriptBlockLogging' -ErrorAction SilentlyContinue"
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "When users are not local administrators, much commodity malware fails to install persistence, and an attacker who phishes a user gets far less. It also stops users installing unapproved software, which shrinks the vulnerability management workload.",
     "title": "Removing admin rights pays twice"
    },
    {
     "type": "cycle",
     "title": "The secure baseline lifecycle",
     "center": "Baseline",
     "items": [
      {
       "label": "Choose reference",
       "text": "Start from a recognised benchmark profile per OS version and tailor it."
      },
      {
       "label": "Pilot",
       "text": "Apply to IT staff and volunteers in each department."
      },
      {
       "label": "Record exceptions",
       "text": "Genuine business needs get an owner, a compensating control and an expiry."
      },
      {
       "label": "Enforce",
       "text": "Push through device or configuration management, never by hand."
      },
      {
       "label": "Measure drift",
       "text": "Report compliance weekly; investigate machines that fall out of baseline."
      },
      {
       "label": "Refresh",
       "text": "Update for new OS versions and benchmark releases; rebuild golden images."
      }
     ],
     "caption": "A baseline is never finished: drift reports and expiring exceptions feed the next revision, and every new operating system version restarts the loop."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A perfectly hardened image from last year is missing a year of patches and policy changes. Rebuild images regularly and patch immediately after deployment.",
     "title": "Golden images age fast"
    },
    {
     "type": "scenario",
     "title": "The macro problem",
     "situation": "Phishing emails with malicious spreadsheet macros are reaching staff at a pharmaceutical company. Only the finance team uses macros, and only from internal templates. Which control is most effective?",
     "options": [
      {
       "text": "Block macros in files from the internet for everyone, and allow only signed macros from trusted locations for finance.",
       "feedback": "Correct. This removes the attack path while preserving the legitimate use.",
       "best": true
      },
      {
       "text": "Send monthly reminders not to enable macros.",
       "feedback": "Awareness helps but users still click 'Enable content' under pressure.",
       "best": false
      },
      {
       "text": "Allow all macros but scan attachments with two antivirus engines.",
       "feedback": "New malicious macros often evade signatures.",
       "best": false
      },
      {
       "text": "Ban spreadsheets entirely for all staff.",
       "feedback": "Disproportionate; the business needs spreadsheets.",
       "best": false
      }
     ]
    },
    {
     "type": "template",
     "title": "Baseline exception register",
     "purpose": "Track every approved deviation from the secure baseline so none become permanent by accident.",
     "columns": [
      "Device / group",
      "Baseline setting",
      "Exception",
      "Business reason",
      "Compensating control",
      "Owner",
      "Expiry"
     ],
     "example": [
      [
       "Lab analysers (12)",
       "No local admin",
       "Vendor software needs admin",
       "Device certification",
       "Separate VLAN, application allow-list",
       "Lab manager",
       "30 Jun 2026"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Which three baseline settings would give the biggest risk reduction on the endpoints you know best, and which department is most likely to push back?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Hardening",
       "def": "Reducing a system's attack surface by removing unnecessary functions and securing configuration."
      },
      {
       "term": "Secure baseline",
       "def": "A documented, approved set of configuration settings for a system type."
      },
      {
       "term": "Configuration drift",
       "def": "Gradual departure of systems from their approved baseline."
      },
      {
       "term": "Application allow-listing",
       "def": "Allowing only approved software to run and blocking everything else."
      },
      {
       "term": "Attack surface",
       "def": "All the points where an attacker could try to enter or extract data."
      },
      {
       "term": "Script block logging",
       "def": "Recording the content of PowerShell scripts as they run, for detection and forensics."
      },
      {
       "term": "Golden image",
       "def": "A pre-configured template used to build new systems."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Most endpoint compromises exploit defaults; a documented, enforced baseline removes them.",
      "Removing daily local admin rights and blocking internet macros cut the most common attack paths.",
      "Enforce baselines through management tools and measure drift continuously.",
      "Exceptions need an owner, a compensating control and an expiry date."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which single change most reduces the impact of a phished standard user on a Windows laptop?",
       "options": [
        "Changing the desktop wallpaper policy",
        "Enabling a screensaver",
        "Installing a second browser",
        "Removing daily local admin rights"
       ],
       "answer": 3,
       "explain": "Without admin rights, much malware cannot install or persist."
      },
      {
       "q": "Which sshd setting stops password guessing against SSH?",
       "options": [
        "PermitRootLogin yes",
        "MaxSessions 100",
        "PasswordAuthentication no",
        "X11Forwarding yes"
       ],
       "answer": 2,
       "explain": "Key-only authentication removes passwords from the attack surface."
      },
      {
       "q": "Why record baseline exceptions with an expiry date?",
       "options": [
        "Because baselines expire every month",
        "So the auditor can delete them",
        "So temporary deviations are reviewed and do not become permanent",
        "So the exception automatically applies to more devices of the same model over time"
       ],
       "answer": 2,
       "explain": "Expiry forces re-review of the risk and controls."
      },
      {
       "q": "What does script block logging help with?",
       "options": [
        "Blocking all PowerShell use by standard users on every workstation",
        "Seeing the actual PowerShell code attackers ran",
        "Encrypting the disk",
        "Speeding up scripts"
       ],
       "answer": 1,
       "explain": "Logged script content is valuable for detection and forensics."
      },
      {
       "q": "A golden image built a year ago is used for new laptops. What is the main risk?",
       "options": [
        "Missing a year of patches and policy updates",
        "It uses too much disk space",
        "It cannot join the domain after the directory's functional level is raised",
        "It disables encryption"
       ],
       "answer": 0,
       "explain": "Images age; patch immediately after deployment and refresh them regularly."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l2",
   "title": "EDR, Malware and Endpoint Triage",
   "subtitle": "Understand malware behaviour, use endpoint telemetry and triage a suspicious host quickly and safely.",
   "minutes": 40,
   "objectives": [
    "Classify common malware types by behaviour.",
    "Use EDR telemetry and built-in commands to triage a suspicious endpoint.",
    "Perform safe first-pass static analysis of a suspicious file."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Endpoint detection and response (EDR)** records what happens on each device: processes, command lines, file writes, registry changes, network connections and logons. It detects suspicious behaviour, lets analysts search across thousands of endpoints and can isolate a host with one click. Antivirus asks 'is this file bad?'; EDR asks 'is this behaviour bad?'"
    },
    {
     "type": "table",
     "title": "Malware by behaviour",
     "head": [
      "Type",
      "What it does",
      "Typical sign"
     ],
     "rows": [
      [
       "Loader / dropper",
       "Downloads and runs the next stage",
       "Office or script process spawning a downloader"
      ],
      [
       "Infostealer",
       "Steals saved passwords, session cookies and crypto wallets; stolen sessions are resold to other criminals",
       "Access to browser credential stores, upload to a new domain"
      ],
      [
       "Remote access trojan",
       "Gives the attacker interactive control",
       "Persistent outbound beaconing"
      ],
      [
       "Ransomware",
       "Encrypts files and often steals data first",
       "Mass file renames, shadow copy deletion"
      ],
      [
       "Worm",
       "Spreads itself across the network",
       "Many outbound SMB or exploit attempts"
      ],
      [
       "Rootkit / bootkit",
       "Hides deep in the OS or firmware",
       "Tampered drivers, missing telemetry"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Attackers increasingly use built-in tools such as PowerShell, remote management utilities, scheduled tasks and signed system binaries. Nothing malicious is written to disk, so file scanning finds nothing. EDR catches these by their **behaviour**: an office application starting PowerShell with an encoded command is suspicious however clean the files are.",
     "title": "Living off the land"
    },
    {
     "type": "tree",
     "title": "A malicious process tree, as EDR shows it",
     "root": {
      "label": "outlook.exe",
      "text": "user opens an attachment",
      "children": [
       {
        "label": "excel.exe",
        "text": "invoice_0612.xlsm",
        "children": [
         {
          "label": "powershell.exe -enc …",
          "text": "encoded download from a new domain",
          "children": [
           {
            "label": "rundll32.exe",
            "text": "loads payload.dll from AppData"
           },
           {
            "label": "schtasks.exe /create",
            "text": "persistence at every logon"
           },
           {
            "label": "whoami /groups",
            "text": "discovery"
           }
          ]
         }
        ]
       },
       {
        "label": "msedge.exe",
        "text": "normal: link opened in the browser"
       }
      ]
     },
     "caption": "Read parent to child: a mail client starting a spreadsheet is normal, but a spreadsheet starting encoded PowerShell that then runs rundll32 and creates a task is a classic loader chain, however clean each file looks."
    },
    {
     "type": "flow",
     "title": "Endpoint triage in the first 15 minutes",
     "items": [
      {
       "label": "Scope",
       "text": "What alert fired, which host, which user, since when?"
      },
      {
       "label": "Process tree",
       "text": "Parent and child processes, command lines, signers."
      },
      {
       "label": "Network",
       "text": "Remote addresses and domains contacted."
      },
      {
       "label": "Persistence",
       "text": "New services, scheduled tasks, run keys, cron jobs."
      },
      {
       "label": "Decide",
       "text": "Benign, suspicious or malicious; isolate if in doubt for a high-value host."
      }
     ]
    },
    {
     "type": "cli",
     "title": "Quick triage on Windows",
     "device": "PowerShell",
     "lines": [
      "# Processes with their full command lines and parents",
      "Get-CimInstance Win32_Process | Select-Object ProcessId, ParentProcessId, Name, CommandLine | Format-Table -Wrap",
      "# Established connections and owning processes",
      "Get-NetTCPConnection -State Established | Select-Object LocalPort, RemoteAddress, RemotePort, OwningProcess",
      "# Scheduled tasks created recently",
      "Get-ScheduledTask | Where-Object { $_.Date -gt (Get-Date).AddDays(-7) } | Select-Object TaskName, TaskPath, Date",
      "# Services set to auto-start from unusual paths",
      "Get-CimInstance Win32_Service | Where-Object { $_.StartMode -eq 'Auto' -and $_.PathName -notmatch 'Windows|Program Files' } | Select-Object Name, PathName"
     ]
    },
    {
     "type": "cli",
     "title": "Quick triage on Linux",
     "device": "Linux host",
     "lines": [
      "ps -eo pid,ppid,user,lstart,cmd --sort=lstart | tail -n 25",
      "sudo ss -tunap | grep ESTAB",
      "# Persistence: cron, timers and recently changed unit files",
      "sudo ls -la /etc/cron.* /var/spool/cron/crontabs 2>/dev/null",
      "systemctl list-timers --all",
      "sudo find /etc/systemd /lib/systemd -name '*.service' -mtime -7",
      "# Authorised keys added recently",
      "sudo find /home /root -name authorized_keys -mtime -7 -ls"
     ]
    },
    {
     "type": "cli",
     "title": "First-pass static analysis of a suspicious file",
     "device": "Linux host",
     "lines": [
      "# Work in an isolated analysis VM, never on a production host",
      "file invoice_scan.exe",
      "sha256sum invoice_scan.exe",
      "strings -n 8 invoice_scan.exe | grep -i -E 'http|powershell|\\.onion|cmd.exe' | head",
      "# Then look up the hash in your threat intelligence platform"
     ],
     "note": "Static analysis is quick and safe; detonating samples belongs in a controlled sandbox with no route to your network."
    },
    {
     "type": "scenario",
     "title": "Isolate or watch?",
     "situation": "EDR alerts that a domain controller's backup agent process spawned a command shell that ran a credential-dumping utility. It is 14:00 on a working day. What should the analyst do?",
     "options": [
      {
       "text": "Watch for 24 hours to gather more intelligence before acting.",
       "feedback": "Watching can be valid for low-value hosts, but not when domain credentials are being stolen.",
       "best": false
      },
      {
       "text": "Reboot the domain controller to clear memory.",
       "feedback": "Rebooting destroys volatile evidence and does not remove persistence or stolen credentials.",
       "best": false
      },
      {
       "text": "Uninstall the backup agent and close the alert.",
       "feedback": "The agent may be the abused path, but the attacker's access and stolen credentials remain.",
       "best": false
      },
      {
       "text": "Isolate the domain controller through EDR (keeping management access), notify the incident lead and start the identity compromise playbook.",
       "feedback": "Correct. Credential dumping on a DC is critical; containment outweighs short-term disruption, and the playbook covers business continuity.",
       "best": true
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "If EDR alerted on a critical server at 02:00, who has the authority to isolate it, and is that decision written down anywhere?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "EDR",
       "def": "Endpoint detection and response: tools that record endpoint activity, detect threats and support response actions."
      },
      {
       "term": "Living off the land",
       "def": "Using legitimate built-in tools for malicious purposes to avoid detection."
      },
      {
       "term": "Infostealer",
       "def": "Malware that steals stored credentials, cookies and other secrets from a device."
      },
      {
       "term": "Process tree",
       "def": "The parent-child relationships of running processes, used to understand how something started."
      },
      {
       "term": "Host isolation",
       "def": "Cutting a device off from the network except for the security tool's management channel."
      },
      {
       "term": "Static analysis",
       "def": "Examining a file without running it."
      },
      {
       "term": "Sandbox",
       "def": "An isolated environment for running suspicious files to observe their behaviour."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "EDR asks whether behaviour is bad, not just whether a file is bad; living-off-the-land attacks need that.",
      "Triage in minutes: scope, process tree, network, persistence, then decide.",
      "Isolate high-value hosts through EDR rather than rebooting, so memory evidence survives.",
      "Analyse suspicious files statically first and detonate only in an isolated sandbox."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Why does EDR catch attacks that file-based antivirus misses?",
       "options": [
        "It scans files more slowly",
        "It only works on servers, so it gives better coverage of the data centre than antivirus",
        "It blocks all PowerShell use",
        "It watches behaviour such as suspicious process chains"
       ],
       "answer": 3,
       "explain": "Living-off-the-land attacks use clean files; behaviour reveals them."
      },
      {
       "q": "A word processor starts PowerShell with an encoded command. What is this most likely?",
       "options": [
        "A malicious document running a loader",
        "A routine spell-check dictionary update downloaded by the office suite",
        "Printer driver installation",
        "A user changing fonts"
       ],
       "answer": 0,
       "explain": "Office applications rarely need to launch encoded PowerShell."
      },
      {
       "q": "Why should you avoid rebooting a suspicious host as a first step?",
       "options": [
        "It always triggers ransomware",
        "It deletes the EDR agent and all of its locally cached telemetry",
        "It destroys volatile evidence in memory",
        "It is illegal"
       ],
       "answer": 2,
       "explain": "Memory holds running processes, network connections and keys that reboots erase."
      },
      {
       "q": "Which Linux location should you check for persistence?",
       "options": [
        "The /proc/cpuinfo file",
        "The DNS resolver configuration only",
        "The user's browser history only",
        "Cron directories and systemd timers"
       ],
       "answer": 3,
       "explain": "Cron jobs and timers are common persistence mechanisms."
      },
      {
       "q": "Where should suspicious files be detonated?",
       "options": [
        "On the analyst's daily laptop",
        "In an isolated sandbox with no route to production",
        "On the affected server",
        "On a shared file server that is backed up every night, so changes can be undone"
       ],
       "answer": 1,
       "explain": "Isolation prevents the sample from causing harm."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l3",
   "title": "Email Security, Phishing and Business Email Compromise",
   "subtitle": "Defend the inbox: authentication records, gateways, user reporting and payment fraud controls.",
   "minutes": 35,
   "objectives": [
    "Configure and read SPF, DKIM and DMARC records.",
    "Analyse a suspicious email's headers.",
    "Design controls against business email compromise."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Email is still the top delivery route for phishing, malware and fraud. Defence has four layers: **authenticate** senders, **filter** content and links, **empower** users to report, and **protect business processes** so a convincing email alone cannot move money. Authentication is no longer optional: since 2024 the largest mailbox providers require SPF, DKIM and DMARC from organisations that send in bulk, and unauthenticated mail is increasingly rejected."
    },
    {
     "type": "table",
     "title": "Email authentication",
     "head": [
      "Mechanism",
      "What it proves",
      "Example record"
     ],
     "rows": [
      [
       "SPF",
       "Which servers may send mail for a domain",
       "v=spf1 include:_spf.mailhost.example -all"
      ],
      [
       "DKIM",
       "The message was signed by the domain and not altered",
       "selector1._domainkey TXT 'v=DKIM1; k=rsa; p=...'"
      ],
      [
       "DMARC",
       "Policy when SPF/DKIM fail or do not align with the From domain, plus reporting",
       "_dmarc TXT 'v=DMARC1; p=reject; rua=mailto:dmarc@example.com'"
      ],
      [
       "BIMI and ARC",
       "Brand logo display; preserving authentication through forwarders",
       "Optional extras after DMARC enforcement"
      ]
     ]
    },
    {
     "type": "cli",
     "title": "Checking a domain's email authentication",
     "device": "Linux host",
     "lines": [
      "dig +short example.com TXT | grep spf",
      "\"v=spf1 include:_spf.mailhost.example ip4:198.51.100.25 -all\"",
      "dig +short _dmarc.example.com TXT",
      "\"v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@example.com\"",
      "dig +short selector1._domainkey.example.com TXT"
     ],
     "note": "Move DMARC from p=none to quarantine and then reject only after reports show all legitimate senders pass."
    },
    {
     "type": "sequence",
     "title": "How a receiver checks SPF, DKIM and DMARC",
     "actors": [
      "Sending server",
      "Receiving server",
      "DNS"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "SMTP: envelope sender, From:, DKIM-Signature"
      },
      {
       "from": 1,
       "to": 2,
       "label": "SPF record of envelope domain?"
      },
      {
       "from": 2,
       "to": 1,
       "label": "v=spf1 … -all",
       "reply": true
      },
      {
       "from": 1,
       "to": 1,
       "label": "SPF: is the sending IP listed?"
      },
      {
       "from": 1,
       "to": 2,
       "label": "DKIM key at selector._domainkey"
      },
      {
       "from": 2,
       "to": 1,
       "label": "Public key",
       "reply": true
      },
      {
       "from": 1,
       "to": 1,
       "label": "DKIM: signature valid?"
      },
      {
       "from": 1,
       "to": 2,
       "label": "_dmarc record of From domain"
      },
      {
       "from": 2,
       "to": 1,
       "label": "p=reject; rua=…",
       "reply": true
      },
      {
       "from": 1,
       "to": 1,
       "label": "Aligned pass? If not, apply policy"
      },
      {
       "from": 1,
       "to": 0,
       "label": "250 accepted or 550 rejected",
       "reply": true
      }
     ],
     "caption": "DMARC passes only when SPF or DKIM passes for a domain that aligns with the visible From address, which is what stops exact-domain spoofing. Aggregate reports sent to the rua address show who is sending as you."
    },
    {
     "type": "steps",
     "title": "Rolling out DMARC",
     "items": [
      {
       "title": "Monitor",
       "text": "Publish p=none with reporting and collect aggregate reports for several weeks."
      },
      {
       "title": "Inventory senders",
       "text": "Find every service that sends as your domain: CRM, payroll, ticketing, marketing."
      },
      {
       "title": "Fix alignment",
       "text": "Configure SPF and DKIM for each legitimate sender."
      },
      {
       "title": "Enforce gradually",
       "text": "Move to quarantine, then reject, watching reports."
      },
      {
       "title": "Maintain",
       "text": "Add new senders through change control."
      }
     ]
    },
    {
     "type": "table",
     "title": "Reading headers: what to check",
     "head": [
      "Header",
      "Why it matters"
     ],
     "rows": [
      [
       "From vs Reply-To",
       "A different reply address is a classic fraud sign"
      ],
      [
       "Return-Path",
       "Envelope sender used for SPF checks"
      ],
      [
       "Authentication-Results",
       "SPF, DKIM and DMARC verdicts from the receiving server"
      ],
      [
       "Received chain",
       "Read bottom to top to see the true origin server"
      ],
      [
       "Message-ID domain",
       "Mismatch with the From domain can indicate spoofing tools"
      ]
     ]
    },
    {
     "type": "case",
     "title": "Supplier invoice fraud at a garment exporter",
     "context": "The accounts team of a Chattogram garment exporter receives an email from their fabric supplier's real address asking to update bank details for an overdue USD 186,000 invoice. The thread includes earlier genuine messages. Two days later the real supplier asks why they have not been paid. Investigation shows the supplier's mailbox was compromised and an inbox rule hid replies.",
     "questions": [
      "Why did email authentication not stop this?",
      "What process control would have prevented the loss?",
      "What should the exporter do in the first hour after discovery?"
     ],
     "answer": "The email came from the supplier's genuine, compromised mailbox, so SPF, DKIM and DMARC all passed. The key control is a business process: any change to supplier bank details must be verified by a call to a known phone number from the vendor master file (not the email), with dual approval and a cooling-off period for large payments. In the first hour: contact the bank to attempt a recall or freeze, report to law enforcement and the bank's fraud team, alert the supplier so they secure their mailbox, preserve the emails and headers, and check whether any of the exporter's own mailboxes have suspicious rules or sign-ins."
    },
    {
     "type": "sequence",
     "title": "Vendor email compromise, step by step",
     "actors": [
      "Attacker",
      "Supplier mailbox",
      "Exporter AP team",
      "Exporter's bank"
     ],
     "steps": [
      {
       "from": 0,
       "to": 1,
       "label": "Phish supplier, take over mailbox"
      },
      {
       "from": 0,
       "to": 1,
       "label": "Inbox rule hides replies"
      },
      {
       "from": 1,
       "to": 2,
       "label": "Reply in real thread: new bank details",
       "note": "passes SPF, DKIM and DMARC"
      },
      {
       "from": 2,
       "to": 2,
       "label": "No call-back to known number",
       "note": "the missing control"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Pay USD 186,000 to new account"
      },
      {
       "from": 3,
       "to": 0,
       "label": "Funds reach a mule account",
       "reply": true
      },
      {
       "from": 1,
       "to": 2,
       "label": "Real supplier: payment overdue?",
       "note": "two days later"
      },
      {
       "from": 2,
       "to": 3,
       "label": "Urgent recall request"
      }
     ],
     "caption": "Every message the exporter received was genuine and authenticated; the fraud succeeded at step 4, where a process control was missing. Speed at step 8 decides whether any money comes back."
    },
    {
     "type": "scenario",
     "title": "The CEO's urgent request",
     "situation": "A finance officer receives a message apparently from the managing director's personal email: 'I am in a meeting, buy ten gift cards for a client urgently and send me the codes.' What is the best response?",
     "options": [
      {
       "text": "Buy the cards because the director is senior and in a hurry.",
       "feedback": "Urgency and authority are exactly the pressure tactics fraudsters use.",
       "best": false
      },
      {
       "text": "Verify through a known channel such as a call to the director's office number, and report the message to security.",
       "feedback": "Correct. Out-of-band verification defeats impersonation, and reporting helps protect colleagues.",
       "best": true
      },
      {
       "text": "Reply to the email asking if it is genuine.",
       "feedback": "The fraudster controls that address and will simply say yes.",
       "best": false
      },
      {
       "text": "Forward the email to the whole finance team as a warning, with the link.",
       "feedback": "Spreading the message may lead others to click; report through the proper channel instead.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Business email compromise controls",
     "items": [
      "DMARC at reject for all owned domains, including parked ones",
      "External-sender banners on inbound mail",
      "Phishing-resistant MFA on all mailboxes",
      "Alerts on new inbox forwarding and hiding rules",
      "Bank-detail changes verified by call-back to a known number",
      "Dual approval for payments above a threshold",
      "One-click 'report phish' button feeding the SOC",
      "Treat QR codes in emails and attachments as links: scan them at the gateway and teach staff that QR lures move the click to an unmanaged phone",
      "Regular simulations followed by short, kind training"
     ]
    },
    {
     "type": "reflection",
     "prompt": "Walk through how your finance team would handle an email asking to change a supplier's bank details. Where exactly is the out-of-band check, and could an attacker bypass it?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "SPF",
       "def": "Sender Policy Framework: a DNS record listing servers allowed to send mail for a domain."
      },
      {
       "term": "DKIM",
       "def": "DomainKeys Identified Mail: a cryptographic signature that proves the sending domain and message integrity."
      },
      {
       "term": "DMARC",
       "def": "A DNS policy that tells receivers how to handle mail failing SPF/DKIM alignment, with reporting."
      },
      {
       "term": "Business email compromise (BEC)",
       "def": "Fraud that uses compromised or spoofed email to trick staff into paying or sending data."
      },
      {
       "term": "Display-name spoofing",
       "def": "Using a trusted person's name with an unrelated email address."
      },
      {
       "term": "Look-alike domain",
       "def": "A domain that resembles a real one, such as replacing letters with similar characters."
      },
      {
       "term": "Out-of-band verification",
       "def": "Confirming a request through a separate, trusted communication channel."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "SPF, DKIM and DMARC at enforcement stop exact-domain spoofing, not compromised genuine mailboxes.",
      "Roll DMARC from none to quarantine to reject only after every legitimate sender aligns.",
      "Read headers bottom to top and compare From, Reply-To, Return-Path and Authentication-Results.",
      "Stop payment fraud with process: call-back to a known number, dual approval and cooling-off periods."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which DMARC policy tells receivers to refuse failing mail?",
       "options": [
        "p=none",
        "p=reject",
        "p=monitor",
        "p=allow"
       ],
       "answer": 1,
       "explain": "Reject is full enforcement; none is monitoring only."
      },
      {
       "q": "Why can a BEC email from a compromised supplier mailbox pass SPF, DKIM and DMARC?",
       "options": [
        "It is sent from the supplier's genuine mail system",
        "Because DMARC never checks the From domain",
        "Because SPF only applies to attachments",
        "Because all mail from known suppliers bypasses authentication checks and content filters"
       ],
       "answer": 0,
       "explain": "Authentication proves the domain sent it, not that the sender is honest."
      },
      {
       "q": "Which header should be read bottom to top to find where a message really came from?",
       "options": [
        "Subject",
        "Date",
        "Received",
        "MIME-Version"
       ],
       "answer": 2,
       "explain": "Each relay adds a Received line at the top; the bottom shows the origin."
      },
      {
       "q": "Which control most directly prevents payment fraud from a bank-detail change email?",
       "options": [
        "A larger mailbox quota",
        "Adding a legal disclaimer footer to every outgoing mail from the finance team",
        "Blocking all attachments",
        "Call-back verification to a known number with dual approval"
       ],
       "answer": 3,
       "explain": "Process controls stop money moving on the strength of an email alone."
      },
      {
       "q": "What should come before moving DMARC to reject?",
       "options": [
        "Deleting the SPF record",
        "Disabling DKIM",
        "Turning off the mail gateway",
        "Monitoring reports and fixing every legitimate sender"
       ],
       "answer": 3,
       "explain": "Enforcing too early blocks legitimate mail from unconfigured services."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l4",
   "title": "Vulnerability Management: Discover and Assess",
   "subtitle": "Know every asset, scan it properly and turn scanner output into reliable findings.",
   "minutes": 35,
   "objectives": [
    "Describe the vulnerability management life cycle.",
    "Choose between authenticated, unauthenticated and agent-based scanning.",
    "Validate findings and handle false positives."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Vulnerability management** is a continuous process, not an annual scan. It finds weaknesses in assets, decides which matter, fixes them within agreed times and proves they are fixed. It depends completely on knowing what you own: you cannot scan, patch or protect an asset nobody knows exists."
    },
    {
     "type": "cycle",
     "title": "The vulnerability management cycle",
     "center": "Asset inventory",
     "items": [
      {
       "label": "Discover",
       "text": "Build and maintain the inventory, including cloud and shadow IT."
      },
      {
       "label": "Assess",
       "text": "Scan and collect vulnerability data from many sources."
      },
      {
       "label": "Prioritise",
       "text": "Rank by exploitation, exposure and business impact."
      },
      {
       "label": "Remediate",
       "text": "Patch, reconfigure, mitigate or formally accept."
      },
      {
       "label": "Verify",
       "text": "Re-scan or test to prove the fix."
      },
      {
       "label": "Report",
       "text": "Track SLA metrics and trends for owners and leadership."
      }
     ],
     "caption": "The loop runs continuously around the asset inventory: anything missing from the centre is never scanned, prioritised or fixed, which is why discovery comes first."
    },
    {
     "type": "table",
     "title": "Sources of vulnerability data",
     "head": [
      "Source",
      "Finds",
      "Limits"
     ],
     "rows": [
      [
       "Network scanner (unauthenticated)",
       "Exposed services, banners, obvious misconfigurations",
       "Sees only what the network shows; misses missing patches"
      ],
      [
       "Authenticated scanner",
       "Installed software versions and missing patches",
       "Needs credentials, which must be protected"
      ],
      [
       "Endpoint agent",
       "Continuous software inventory, even off-network laptops",
       "Needs deployment on every device"
      ],
      [
       "External attack surface monitoring",
       "Internet-facing assets you may not know about",
       "Outside-in view only"
      ],
      [
       "Cloud posture tools",
       "Cloud misconfigurations",
       "Covered in the Cloud module"
      ],
      [
       "Software composition analysis",
       "Vulnerable open-source libraries in your code",
       "Covered in the Build module"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Do not depend on a single vulnerability feed",
     "text": "In 2024 and 2025 the main public vulnerability databases faced enrichment backlogs and funding uncertainty, leaving many new CVE records without severity or product data for weeks. Mature programmes combine vendor security advisories, national and regional databases, known-exploited catalogues and their scanners' own research, and record where each priority decision came from."
    },
    {
     "type": "cli",
     "title": "Discovering services on your own network",
     "device": "Linux host",
     "lines": [
      "# Only scan networks you are authorised to scan",
      "# Fast discovery of live hosts in a lab subnet",
      "nmap -sn 10.20.30.0/24",
      "# Service and version detection on common ports",
      "nmap -sV --top-ports 200 -oA lab-scan 10.20.30.0/24",
      "# Check one host for weak TLS configuration",
      "nmap --script ssl-enum-ciphers -p 443 10.20.30.15"
     ],
     "note": "Agree scan windows with system owners; fragile devices such as medical and industrial equipment may need passive discovery instead."
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Aggressive scans have crashed controllers, infusion pumps and old printers. For operational technology and clinical devices, prefer passive network monitoring and vendor-supplied inventories, and scan only with the vendor's agreement in a maintenance window.",
     "title": "Scanning OT and medical devices"
    },
    {
     "type": "compare",
     "title": "False positives versus false negatives",
     "columns": [
      {
       "title": "False positive",
       "items": [
        "Scanner reports a flaw that is not there",
        "Often caused by backported patches with old version strings",
        "Wastes owner time and damages trust",
        "Validate and mark with evidence"
       ]
      },
      {
       "title": "False negative",
       "items": [
        "A real flaw the scanner misses",
        "Caused by failed authentication, unscanned assets or missing checks",
        "More dangerous because nobody acts",
        "Monitor scan coverage and authentication success"
       ]
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Healthy scanning programme",
     "items": [
      "Asset inventory reconciled with scan targets monthly",
      "Authenticated scans with a dedicated, least-privilege scan account",
      "Authentication success rate tracked per scan",
      "Agents on laptops that rarely connect to the office",
      "External surface scanned at least weekly",
      "Scan windows agreed for fragile systems",
      "False positives recorded with evidence, not just suppressed"
     ]
    },
    {
     "type": "scenario",
     "title": "Low numbers, high risk",
     "situation": "A bank's monthly vulnerability report shows a dramatic drop in critical findings. You notice that the authenticated scan success rate fell from 95% to 40% after a password policy change. What is the best interpretation?",
     "options": [
      {
       "text": "The patching team has improved dramatically; congratulate them.",
       "feedback": "The coverage drop explains the numbers better than a sudden patching improvement.",
       "best": false
      },
      {
       "text": "The scanner is broken and should be replaced.",
       "feedback": "The scanner works; its credentials stopped working.",
       "best": false
      },
      {
       "text": "The drop is probably false: most hosts were scanned without credentials, so missing patches were not seen.",
       "feedback": "Correct. Unauthenticated scans miss most patch-level findings; fix the scan account and re-run.",
       "best": true
      },
      {
       "text": "Critical vulnerabilities are no longer being published.",
       "feedback": "Publication rates have not changed.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "What proportion of your assets do you believe are scanned with credentials? How would you prove that number to an auditor?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Vulnerability management",
       "def": "The continuous process of identifying, prioritising, fixing and verifying weaknesses."
      },
      {
       "term": "Authenticated scan",
       "def": "A scan that logs into hosts to inspect installed software and configuration."
      },
      {
       "term": "External attack surface",
       "def": "All of an organisation's internet-facing assets, known and unknown."
      },
      {
       "term": "False positive",
       "def": "A finding that reports a vulnerability that does not actually exist."
      },
      {
       "term": "False negative",
       "def": "A real vulnerability that a tool fails to report."
      },
      {
       "term": "Banner",
       "def": "Text a service reveals about itself, often including its version."
      },
      {
       "term": "Shadow IT",
       "def": "Systems and services used without the IT or security team's knowledge."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Vulnerability management is a continuous cycle built on an accurate asset inventory.",
      "Authenticated scans and agents find missing patches; unauthenticated scans see only what the network shows.",
      "Track scan coverage and credential success, because false negatives hide real exposure.",
      "Use passive discovery for fragile OT and medical devices, and several data sources for vulnerability intelligence."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which scan type best finds missing operating system patches?",
       "options": [
        "Unauthenticated ping sweep",
        "Authenticated scan",
        "External DNS lookup",
        "Port knocking"
       ],
       "answer": 1,
       "explain": "Logging in allows the scanner to read installed versions and patches."
      },
      {
       "q": "Why do backported patches cause false positives?",
       "options": [
        "They remove the software completely",
        "They disable the scanner",
        "The version string looks old even though the fix is applied",
        "They change the IP address and hostname of the server after installation"
       ],
       "answer": 2,
       "explain": "Distributions often fix issues without changing the upstream version number."
      },
      {
       "q": "What is the safest approach for discovering fragile medical devices?",
       "options": [
        "Passive monitoring and vendor inventories",
        "Aggressive full-port scans at peak hours",
        "Brute-force login tests",
        "Unplugging each device in turn to see which network ports go dark"
       ],
       "answer": 0,
       "explain": "Passive methods avoid crashing sensitive equipment."
      },
      {
       "q": "Which is more dangerous for a programme, and why?",
       "options": [
        "False positives, because they are always real",
        "Neither matters if the report looks good",
        "False negatives, because each one costs additional scanner licence fees to process",
        "False negatives, because real flaws go unaddressed"
       ],
       "answer": 3,
       "explain": "Missed vulnerabilities leave real exposure with nobody acting."
      },
      {
       "q": "Which step proves a remediation worked?",
       "options": [
        "Re-scanning or verifying the fix",
        "Closing the ticket",
        "Emailing the asset owner",
        "Updating the organisation's risk appetite statement"
       ],
       "answer": 0,
       "explain": "Verification closes the loop with evidence."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l5",
   "title": "Risk-Based Prioritisation and Patching",
   "subtitle": "Fix what attackers will actually use first, within service levels the business agrees to.",
   "minutes": 40,
   "objectives": [
    "Combine severity, exploitation evidence and asset context into a priority.",
    "Set and measure remediation SLAs.",
    "Run patching in rings with rollback, and manage exceptions."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Tens of thousands of vulnerabilities are published each year and a typical organisation finds thousands in its own estate. Only a small fraction are ever exploited in the wild. Fixing everything by severity score alone wastes effort; **risk-based prioritisation** asks which flaws are being exploited, which are exposed and which sit on critical assets."
    },
    {
     "type": "table",
     "title": "Prioritisation inputs",
     "head": [
      "Input",
      "What it tells you",
      "Where it comes from"
     ],
     "rows": [
      [
       "Severity score (CVSS base)",
       "How bad the flaw is in theory",
       "Published with the vulnerability (version 4.0 since late 2023; many feeds still show 3.1)"
      ],
      [
       "Known exploited catalogue",
       "Attackers are using it now",
       "Government and industry catalogues, for example the US CISA KEV list"
      ],
      [
       "Exploit prediction score (EPSS)",
       "Estimated probability of exploitation activity in the next 30 days",
       "Public data-driven model, retrained periodically (version 4 arrived in 2025)"
      ],
      [
       "Exposure",
       "Internet-facing or reachable from user networks?",
       "Network design and attack surface monitoring"
      ],
      [
       "Asset criticality",
       "Business impact if compromised",
       "Asset inventory and business impact analysis"
      ],
      [
       "Compensating controls",
       "Whether the flaw is reachable or mitigated",
       "WAF, segmentation, configuration"
      ]
     ]
    },
    {
     "type": "matrix",
     "title": "Exploitation versus exposure",
     "x": "Exploitation likelihood (none → known exploited)",
     "y": "Exposure and asset criticality (low → high)",
     "quadrants": [
      {
       "title": "Schedule fast, watch daily",
       "items": [
        "Critical flaw on the internet edge, no exploit yet",
        "Re-check KEV and EPSS daily",
        "P2 SLA"
       ]
      },
      {
       "title": "Fix first",
       "items": [
        "Known exploited and internet-facing",
        "VPN, file transfer, mail gateways",
        "Patch or mitigate within 48–72 h"
       ]
      },
      {
       "title": "Routine cycle",
       "items": [
        "Internal, low-value, no exploit",
        "Next maintenance window"
       ]
      },
      {
       "title": "Contain, then fix",
       "items": [
        "Exploited but reachable only internally",
        "Segment and monitor",
        "P2 SLA"
       ]
      }
     ],
     "caption": "Severity alone decides nothing: the same CVSS score lands in different boxes depending on whether attackers are using it and whether they can reach the asset."
    },
    {
     "type": "formula",
     "title": "A practical priority model",
     "items": [
      {
       "name": "CVSS base score",
       "expr": "0.0 to 10.0 from exploitability and impact metrics",
       "meaning": "None 0, low 0.1–3.9, medium 4.0–6.9, high 7.0–8.9, critical 9.0–10.0. In version 4.0 a base-only score is labelled CVSS-B; adding threat and environmental metrics gives CVSS-BTE."
      },
      {
       "name": "Risk-based priority",
       "expr": "priority = severity × exploitation likelihood × exposure × asset criticality",
       "meaning": "Use simple multipliers (for example 1–3 each) to rank findings consistently."
      },
      {
       "name": "Mean time to remediate",
       "expr": "MTTR = Σ (fix date − discovery date) ÷ number of fixed findings",
       "meaning": "Track per severity tier and per owner."
      },
      {
       "name": "SLA compliance",
       "expr": "SLA % = findings fixed within SLA ÷ findings due × 100",
       "meaning": "The headline metric for leadership."
      }
     ]
    },
    {
     "type": "tree",
     "title": "A simplified SSVC-style decision tree",
     "root": {
      "label": "Exploitation?",
      "text": "first decision point",
      "children": [
       {
        "label": "Active",
        "text": "listed as known exploited",
        "children": [
         {
          "label": "Automatable or exposed",
          "text": "Act: emergency fix now"
         },
         {
          "label": "Otherwise",
          "text": "Attend: fix within days"
         }
        ]
       },
       {
        "label": "Public proof of concept",
        "children": [
         {
          "label": "High mission impact",
          "text": "Attend: fix within days"
         },
         {
          "label": "Lower impact",
          "text": "Track*: watch closely"
         }
        ]
       },
       {
        "label": "None known",
        "children": [
         {
          "label": "Total technical impact",
          "text": "Track*: watch closely"
         },
         {
          "label": "Partial impact",
          "text": "Track: normal cycle"
         }
        ]
       }
      ]
     },
     "caption": "Stakeholder-specific vulnerability categorisation replaces a single score with a few decisions: exploitation, automatability, technical impact and mission impact. This is a teaching simplification; tune the branches to your own SLAs."
    },
    {
     "type": "table",
     "title": "Example remediation SLAs",
     "head": [
      "Priority",
      "Typical criteria",
      "Target"
     ],
     "rows": [
      [
       "P1 Emergency",
       "Known exploited and internet-facing, or on a crown-jewel system",
       "48–72 hours, or mitigate immediately"
      ],
      [
       "P2 High",
       "Critical or high severity with public exploit, internal exposure",
       "14 days"
      ],
      [
       "P3 Medium",
       "High severity, no known exploit, limited exposure",
       "30–45 days"
      ],
      [
       "P4 Low",
       "Low severity or well mitigated",
       "Next maintenance cycle / 90 days"
      ]
     ]
    },
    {
     "type": "flow",
     "title": "Patching in rings",
     "items": [
      {
       "label": "Ring 0",
       "text": "IT and security test devices, same day."
      },
      {
       "label": "Ring 1",
       "text": "Pilot users in each department, 2–3 days."
      },
      {
       "label": "Ring 2",
       "text": "Broad user population, after pilot success."
      },
      {
       "label": "Ring 3",
       "text": "Critical servers in agreed windows with rollback plans."
      }
     ]
    },
    {
     "type": "cli",
     "title": "Checking patch state",
     "device": "Linux host",
     "lines": [
      "# Debian/Ubuntu: list pending security updates",
      "apt list --upgradable 2>/dev/null | grep -i security",
      "# RHEL-family: list security advisories that apply",
      "sudo dnf updateinfo list security",
      "# Is a reboot needed to load a patched kernel or library?",
      "[ -f /var/run/reboot-required ] && cat /var/run/reboot-required"
     ]
    },
    {
     "type": "cli",
     "title": "Checking patch state on Windows",
     "device": "PowerShell",
     "lines": [
      "# Most recently installed updates",
      "Get-HotFix | Sort-Object InstalledOn -Descending | Select-Object -First 10 HotFixID, InstalledOn",
      "# Last boot time: patches often need a restart to take effect",
      "(Get-CimInstance Win32_OperatingSystem).LastBootUpTime"
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "When a patch cannot be applied quickly, reduce exposure: a WAF or IPS rule for the exploit pattern, disabling the vulnerable feature, restricting network access to the service or isolating the system. Record it as a compensating control with an expiry, not as a fix.",
     "title": "Virtual patching buys time"
    },
    {
     "type": "scenario",
     "title": "Two findings, one weekend",
     "situation": "The team can fix one finding before Monday. Finding A: CVSS 9.8 in an internal reporting server, no known exploit, reachable only from the finance VLAN. Finding B: CVSS 7.5 on the internet-facing VPN gateway, listed in a known-exploited catalogue. Which should be fixed first?",
     "options": [
      {
       "text": "Finding A, because its CVSS score is higher.",
       "feedback": "CVSS measures severity, not likelihood of attack or exposure.",
       "best": false
      },
      {
       "text": "Neither; wait for the monthly patch cycle.",
       "feedback": "An exploited edge-device flaw cannot wait a month.",
       "best": false
      },
      {
       "text": "Both by turning off the VPN and the reporting server permanently.",
       "feedback": "Disproportionate and stops the business; mitigation or patching is better.",
       "best": false
      },
      {
       "text": "Finding B, because it is actively exploited and internet-facing.",
       "feedback": "Correct. Real-world exploitation plus internet exposure outweighs a higher theoretical score on an internal system.",
       "best": true
      }
     ]
    },
    {
     "type": "template",
     "title": "Vulnerability exception request",
     "purpose": "Formally record when a vulnerability cannot be fixed within its SLA.",
     "columns": [
      "Finding",
      "Asset",
      "Priority",
      "Reason it cannot be fixed",
      "Compensating controls",
      "Risk owner",
      "Expiry"
     ],
     "example": [
      [
       "Remote code execution in imaging software",
       "PACS server",
       "P2",
       "Vendor certification pending",
       "Segmented VLAN, IPS rule, admin access via PAM",
       "Head of Radiology",
       "60 days"
      ]
     ],
     "rows": 6
    },
    {
     "type": "reflection",
     "prompt": "Write the remediation SLA you would propose for internet-facing systems with known-exploited flaws. Who must agree to it, and what happens when it is missed?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "CVSS",
       "def": "Common Vulnerability Scoring System: a standard 0–10 severity score for vulnerabilities."
      },
      {
       "term": "EPSS",
       "def": "Exploit Prediction Scoring System: estimates the probability a vulnerability will be exploited soon."
      },
      {
       "term": "Known exploited vulnerability",
       "def": "A vulnerability with reliable evidence of exploitation in the wild."
      },
      {
       "term": "Remediation SLA",
       "def": "The agreed maximum time to fix a vulnerability of a given priority."
      },
      {
       "term": "Patch ring",
       "def": "A group of devices that receives updates at a given stage of a phased rollout."
      },
      {
       "term": "Virtual patching",
       "def": "Blocking exploitation with a network or application control while the real patch is pending."
      },
      {
       "term": "MTTR",
       "def": "Mean time to remediate: the average time from discovery to fix."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Key takeaways",
     "items": [
      "Only a small share of vulnerabilities are ever exploited; prioritise by exploitation, exposure and asset criticality, not CVSS alone.",
      "Known-exploited catalogues and EPSS add the real-world likelihood that severity scores lack.",
      "Agree remediation SLAs per priority and report SLA compliance and MTTR.",
      "Patch in rings with rollback, and use virtual patching as a recorded, expiring compensating control."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which factor most strongly raises a vulnerability's priority?",
       "options": [
        "A long technical description",
        "The vendor's market share",
        "Evidence of active exploitation on an exposed asset",
        "A CVSS score of 7.0 on an internal test server"
       ],
       "answer": 2,
       "explain": "Exploitation plus exposure is the strongest predictor of real risk."
      },
      {
       "q": "What does EPSS estimate?",
       "options": [
        "The financial cost of a breach",
        "The probability of exploitation in the near future",
        "How long a patch takes to install across a typical enterprise estate",
        "The number of affected users"
       ],
       "answer": 1,
       "explain": "EPSS is a data-driven likelihood model."
      },
      {
       "q": "Why patch in rings?",
       "options": [
        "To slow down patching on purpose",
        "Because vendors require it by law",
        "To catch broken updates on a small group before they hit everyone",
        "To avoid ever patching servers"
       ],
       "answer": 2,
       "explain": "Rings limit the blast radius of a bad patch."
      },
      {
       "q": "Which is correctly described as virtual patching?",
       "options": [
        "Installing the vendor patch",
        "An IPS rule blocking the exploit while the patch is pending",
        "Deleting the scanner finding",
        "Reinstalling the operating system"
       ],
       "answer": 1,
       "explain": "Virtual patching mitigates exploitation without changing the vulnerable code."
      },
      {
       "q": "Thirty findings were due this month and 24 were fixed within SLA. What is SLA compliance?",
       "options": [
        "80%",
        "24%",
        "125%",
        "60%"
       ],
       "answer": 0,
       "explain": "24 ÷ 30 × 100 = 80%."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m1",
  "q": "A risk owner asks whether a BDT 6 lakh per year monitoring service is worth buying. The ALE for the risk is BDT 15 lakh today and would fall to BDT 5 lakh with the service. What should the analyst advise?",
  "options": [
   "It is worth buying: it saves BDT 4 lakh per year net",
   "It is not worth buying because it costs more than nothing",
   "It is worth buying only if the ALE falls to zero",
   "It cannot be judged without knowing the exposure factor for the asset"
  ],
  "answer": 0,
  "explain": "Control value = 15 − 5 − 6 = BDT 4 lakh per year. A positive value supports the purchase. Zero ALE is unrealistic, and the ALE values already include the exposure factor."
 },
 {
  "module": "m1",
  "q": "Investigators find that an attacker used a renamed system utility to read credential memory on three servers. A manager asks for the tactic involved so the SOC can check its coverage map. Which answer is correct?",
  "options": [
   "Lateral movement through remote services",
   "Exfiltration over an encrypted channel",
   "Credential access",
   "Reconnaissance"
  ],
  "answer": 2,
  "explain": "Reading credential memory serves the goal of stealing credentials. Initial access, exfiltration and reconnaissance are other goals in the sequence."
 },
 {
  "module": "m1",
  "q": "A bank's payment system must stay online, but a legacy component cannot be patched for three months. What is the most appropriate interim action?",
  "options": [
   "Formally accept the risk without additional controls because the system is critical to payments",
   "Disable logging on the component to reduce load",
   "Move the component onto the user VLAN to simplify access",
   "Apply and document compensating controls with an owner and an end date"
  ],
  "answer": 3,
  "explain": "Compensating controls reduce the risk while patching is impossible. Acceptance without controls ignores a known weakness, and the last two options increase risk."
 },
 {
  "module": "m1",
  "q": "A security lead wants detections that will still work after attackers rebuild their malware. Which focus gives the most durable value?",
  "options": [
   "Blocking the exact file hashes collected during the last major incident",
   "Detecting attacker behaviours such as credential dumping",
   "Blocking last month's command-and-control IP addresses",
   "Searching for the domain names in a vendor report"
  ],
  "answer": 1,
  "explain": "Hashes, IPs and domains are cheap for attackers to change. Behaviours sit near the top of the pyramid of pain."
 },
 {
  "module": "m1",
  "q": "A user passes MFA from a managed laptop, but the device has missed security updates for 60 days. The resource is the HR payroll system. What would a zero trust policy most likely do?",
  "options": [
   "Allow full access because MFA succeeded and the laptop is company-managed",
   "Allow access but disable the user's MFA",
   "Block or limit access until the device is compliant",
   "Allow access only over the office Wi-Fi"
  ],
  "answer": 2,
  "explain": "Zero trust evaluates device health as well as identity. Being on the office network does not make a non-compliant device trustworthy."
 },
 {
  "module": "m1",
  "q": "A team stores customer passwords using unsalted SHA-256. An auditor flags it. What change should the developers make?",
  "options": [
   "Encrypt the existing SHA-256 values with AES and keep the key in the application code",
   "Move to a salted, slow password hashing function and re-hash at next login",
   "Switch to MD5 because it is faster to compute",
   "Base64-encode the hashes before storing them"
  ],
  "answer": 1,
  "explain": "Slow, salted password hashing resists offline guessing. MD5 is weaker, Base64 adds nothing and a key in code is easily stolen."
 },
 {
  "module": "m1",
  "q": "A threat report describes a group that buys VPN access, scans internally and deploys ransomware at weekends. Your SOC can build two new detections this month. Which pair is best?",
  "options": [
   "VPN logons with unusual context and internal scanning from VPN addresses",
   "Detections for website defacement and for printer driver errors across all branch offices",
   "USB insertion at reception and failed Wi-Fi logins",
   "Expired TLS certificates and DNS cache size"
  ],
  "answer": 0,
  "explain": "Threat-informed defence prioritises behaviours the group actually uses: brokered VPN access and discovery scanning."
 },
 {
  "module": "m1",
  "q": "An executive asks why a certificate's private key in a public repository matters if the commit was deleted. What is the best explanation?",
  "options": [
   "Deleted commits are encrypted automatically by the hosting platform, so nobody can recover them",
   "Private keys are useless without the matching password",
   "Only the public key was exposed, so there is no risk",
   "Public repositories are scraped quickly, so the key must be treated as exposed"
  ],
  "answer": 3,
  "explain": "Once public, a secret must be assumed copied. Revocation and rotation are required; deletion does not reverse exposure."
 },
 {
  "module": "m2",
  "q": "An attacker compromises a receptionist's PC and within an hour reaches the backup server over SMB. A post-incident review asks which design change would have done most to prevent this. What should the analyst recommend?",
  "options": [
   "Install a second antivirus product on the receptionist's PC and all other front-desk machines",
   "Increase the password length policy from 10 to 12 characters",
   "Move the backup server to the DMZ so it is outside the domain network",
   "Segment backups into a restricted zone reachable only by the backup service"
  ],
  "answer": 3,
  "explain": "Restricting backup access to the backup service blocks lateral movement to recovery systems. The DMZ is for public services, and the other options do not stop the path."
 },
 {
  "module": "m2",
  "q": "A firewall review finds a rule allowing RDP from any internal address to all servers, used four times in 90 days by unknown sources. What is the best action?",
  "options": [
   "Keep it because the hit count is low",
   "Keep the rule but move RDP to a non-standard port so scanners miss it",
   "Replace it with RDP allowed only from the admin jump hosts",
   "Disable firewall logging for that rule to reduce noise"
  ],
  "answer": 2,
  "explain": "Low use plus an unknown owner means it should be tightened to the approved admin path. Changing ports only obscures the service."
 },
 {
  "module": "m2",
  "q": "A garment buyer's auditors require that the machine vendor's remote access is individually accountable and limited to one maintenance PC. Which solution fits best?",
  "options": [
   "A site-to-site VPN between the vendor's office and the factory network",
   "Per-user ZTNA access with MFA scoped to the maintenance PC",
   "A shared VPN account whose password rotates every quarter",
   "Port forwarding from the internet to the maintenance PC's remote-desktop port"
  ],
  "answer": 1,
  "explain": "Per-user ZTNA gives accountability and limits access to one application. A site-to-site VPN extends the whole network, and the others are shared or exposed."
 },
 {
  "module": "m2",
  "q": "Flow data shows a server making 60-byte outbound connections to the same external IP every 300 seconds, plus or minus 10 seconds, for nine days. What is the most likely explanation to investigate first?",
  "options": [
   "Malware beaconing to an external command-and-control server",
   "A user browsing news websites during lunch breaks",
   "A scheduled full backup of the server to the tape library",
   "Normal internal DNS replication"
  ],
  "answer": 0,
  "explain": "Small, highly regular connections to one external host fit beaconing. User browsing is irregular and backups move large volumes."
 },
 {
  "module": "m2",
  "q": "A SOC has limited storage and wants a year of evidence about which internal hosts communicated, for investigations of lateral movement. What should they retain?",
  "options": [
   "Full packet capture of every link",
   "Screenshots of the firewall dashboard",
   "Only IPS alerts, which already record all traffic",
   "Flow records from core switches, firewalls and cloud networks"
  ],
  "answer": 3,
  "explain": "Flow records are compact and show who talked to whom. Full PCAP for a year is impractical, and IPS alerts cover only matched signatures."
 },
 {
  "module": "m2",
  "q": "Staff laptops have started sending DNS queries directly to public encrypted DNS services, and the protective DNS service sees fewer queries. What is the best response?",
  "options": [
   "Turn off the protective DNS service because it is no longer needed",
   "Ask users to stop browsing the web during working hours so that DNS volumes return to normal",
   "Manage devices to use the enterprise resolver and block unapproved external DNS paths",
   "Disable TLS on the proxy to make DNS queries visible again"
  ],
  "answer": 2,
  "explain": "Managing resolver settings and blocking bypass paths keeps both privacy and control. The other options remove protection or are unrealistic."
 },
 {
  "module": "m2",
  "q": "A hospital wants to stop credential theft through fake Wi-Fi networks that copy its staff network name. What should the network team implement?",
  "options": [
   "A hidden network name for the staff Wi-Fi",
   "802.1X with server certificate validation on managed devices",
   "MAC address filtering on all access points",
   "A longer shared Wi-Fi password, printed on posters in staff-only areas"
  ],
  "answer": 1,
  "explain": "Certificate validation stops devices from authenticating to an impostor. Hidden names and MAC filters are easily bypassed."
 },
 {
  "module": "m2",
  "q": "A power plant's IT team wants the historian in the control network to send data to business analysts. What is the safest design?",
  "options": [
   "Replicate the historian to a server in an industrial DMZ that analysts access",
   "Allow analysts to connect directly from the office network to the historian",
   "Give each analyst a VPN account into the control network",
   "Copy the historian database onto analysts' laptops every night using encrypted USB drives"
  ],
  "answer": 0,
  "explain": "An industrial DMZ brokers data so no IT system talks directly to the control network."
 },
 {
  "module": "m3",
  "q": "An internal audit at a mobile financial services provider finds 230 enabled accounts belonging to people who left in the past year. What is the most important process fix?",
  "options": [
   "Run a manual clean-up once a year before the external audit",
   "Ask managers to email IT whenever someone resigns, if they remember",
   "Make all accounts expire every 30 days and let users renew them by request",
   "Link account disabling to the HR leaver record on the last working day"
  ],
  "answer": 3,
  "explain": "An HR-driven leaver trigger is reliable and timely. Annual clean-ups leave months of exposure, email requests are unreliable and mass expiry disrupts everyone."
 },
 {
  "module": "m3",
  "q": "Finance staff at a hospital group were phished through a proxy page and the attackers replayed session cookies despite app-based MFA codes. What should be prioritised for these users?",
  "options": [
   "Phishing-resistant MFA such as passkeys or security keys",
   "Switching their MFA from authenticator app codes to SMS codes sent to their phones",
   "Longer passwords with more special characters",
   "Weekly password changes for all finance staff"
  ],
  "answer": 0,
  "explain": "Passkeys and security keys are bound to the real origin and cannot be relayed. SMS is weaker, and password changes do not stop cookie replay."
 },
 {
  "module": "m3",
  "q": "A user reports a call from 'IT' asking them to approve a push request. Later the help desk receives a call from the same user's name asking to register a new phone. What control would most directly stop the second step?",
  "options": [
   "A shorter lockout duration on failed logons",
   "Moving the help desk to a different floor",
   "Strong, documented identity verification before any MFA reset",
   "Allowing users to reset MFA through any email address"
  ],
  "answer": 2,
  "explain": "Help-desk resets must use verification attackers cannot easily pass, such as a video call with ID or manager approval."
 },
 {
  "module": "m3",
  "q": "Several staff consented to an unknown app that requested 'read all mail'. The security team resets their passwords. Two days later, mail is still being read. Why?",
  "options": [
   "The password reset failed to replicate to all of the domain controllers in the other sites",
   "The app's OAuth grant and refresh tokens are not affected by password resets",
   "Mail can be read without any authentication in SSO",
   "The users' laptops still contain the old password in cache"
  ],
  "answer": 1,
  "explain": "OAuth consent creates a separate grant. It must be revoked directly, along with its tokens."
 },
 {
  "module": "m3",
  "q": "A domain administrator uses the same account for email, web browsing and server administration. What is the best remediation?",
  "options": [
   "Separate admin accounts used only from privileged access workstations",
   "A longer password for the existing combined account",
   "Disabling web browsing on every server in the domain and keeping the combined account",
   "Adding the admin to a second, renamed administrators group"
  ],
  "answer": 0,
  "explain": "Separating admin identities and using PAWs removes credential exposure on everyday devices."
 },
 {
  "module": "m3",
  "q": "A SIEM shows 160 Kerberos service ticket requests with RC4 encryption from one workstation in ten minutes. Which attack is most likely?",
  "options": [
   "Password spraying",
   "Kerberoasting",
   "Credential stuffing against the web portal",
   "DNS tunnelling"
  ],
  "answer": 1,
  "explain": "Bulk service ticket requests, especially with RC4, are the Kerberoasting pattern."
 },
 {
  "module": "m3",
  "q": "An identity provider outage locks all administrators out of the cloud tenant. Which preparation would have allowed safe recovery?",
  "options": [
   "A shared admin password written on the server room whiteboard so the on-call team can find it",
   "Disabling MFA for all administrators permanently",
   "A second identity provider with no MFA enabled",
   "Tested break-glass accounts excluded from normal policies and monitored on use"
  ],
  "answer": 3,
  "explain": "Break-glass accounts are designed for exactly this, with strong protection and alerting."
 },
 {
  "module": "m3",
  "q": "A bank wants to stop treasury users from both creating and approving high-value transfers. Which control fits?",
  "options": [
   "A longer password policy and quarterly password changes for all treasury staff",
   "Single sign-on for the treasury application",
   "Separation of duties enforced in the application's roles",
   "Daily backups of the transfer database"
  ],
  "answer": 2,
  "explain": "Splitting creation and approval between different roles prevents one person completing a fraudulent transfer."
 },
 {
  "module": "m4",
  "q": "Commodity malware keeps installing persistence on staff laptops after users open phishing attachments. Which baseline change would most reduce its success?",
  "options": [
   "Changing laptops' screen lock from 15 to 10 minutes",
   "Increasing the size of the antivirus quarantine folder",
   "Removing local administrator rights from daily user accounts",
   "Allowing users to install any software they need to save support time"
  ],
  "answer": 2,
  "explain": "Without admin rights, much malware cannot install services or drivers. The other changes do little or make things worse."
 },
 {
  "module": "m4",
  "q": "EDR shows a spreadsheet application launching a command shell that downloads a file from a newly registered domain. The host is a finance user's laptop. What is the most appropriate first action?",
  "options": [
   "Close the alert because spreadsheet macros are common in finance",
   "Isolate the laptop and investigate the process tree and download",
   "Reboot the laptop remotely to stop the process",
   "Email the user and ask whether they meant to download it"
  ],
  "answer": 1,
  "explain": "The chain is a strong malicious pattern. Isolation contains it while preserving evidence; rebooting destroys memory evidence."
 },
 {
  "module": "m4",
  "q": "A company's DMARC record is 'p=none' and attackers are spoofing its exact domain in invoice emails to customers. Reports show all legitimate senders now pass. What should be done?",
  "options": [
   "Delete the SPF record to stop the spoofing",
   "Change the company's domain name",
   "Ask customers to ignore emails containing invoices from now on",
   "Move the DMARC policy to quarantine and then reject"
  ],
  "answer": 3,
  "explain": "With legitimate senders aligned, enforcement makes receivers refuse spoofed mail."
 },
 {
  "module": "m4",
  "q": "Accounts payable receives a genuine-looking email from a known supplier's real address with new bank details. What control should decide whether the change is accepted?",
  "options": [
   "A call-back to the supplier's known number and a second approver",
   "Checking that the email passed SPF, DKIM and DMARC before updating the vendor record",
   "Checking whether the email has the supplier's logo",
   "Replying to the same email thread to confirm the change"
  ],
  "answer": 0,
  "explain": "A compromised supplier mailbox passes all email authentication and controls the reply thread; only out-of-band verification is reliable."
 },
 {
  "module": "m4",
  "q": "Vulnerability counts dropped sharply this month, but the scanner's credential success rate fell to 35%. What should the vulnerability lead conclude?",
  "options": [
   "Patching has improved significantly and the new numbers should be reported to the board",
   "The scanner vendor has removed many checks",
   "The results are unreliable until authenticated scanning is restored",
   "The organisation now has fewer assets"
  ],
  "answer": 2,
  "explain": "Without credentials, scans miss most missing-patch findings, so the drop is an artefact of coverage."
 },
 {
  "module": "m4",
  "q": "A vulnerability team can fix only one finding before the weekend. Which should it remediate first?",
  "options": [
   "CVSS 9.9 on an isolated training lab machine that has no network connection of any kind",
   "CVSS 5.3 on an internal printer with a public proof of concept",
   "CVSS 7.0 on a test server due to be decommissioned next week",
   "CVSS 8.1 on an internet-facing file transfer server that is listed as actively exploited"
  ],
  "answer": 3,
  "explain": "Active exploitation on an internet-facing system is the highest real risk. An isolated lab machine is unreachable despite its score, and the printer and decommissioning server are lower priority."
 },
 {
  "module": "m4",
  "q": "A patch for a critical hospital imaging system cannot be applied for 45 days because of vendor certification. What is the right approach?",
  "options": [
   "Record an exception with compensating controls, a risk owner and an expiry",
   "Leave it unrecorded until the vendor certifies the patch",
   "Apply the patch anyway tonight and accept that the vendor's support contract becomes void",
   "Disconnect the imaging system from the network for 45 days"
  ],
  "answer": 0,
  "explain": "A formal exception keeps the risk visible and controlled while the vendor completes certification."
 },
 {
  "module": "m4",
  "q": "An organisation pushes a new monthly update to all 4,000 laptops at once and 600 fail to boot. Which practice would have reduced the impact?",
  "options": [
   "Delaying all updates by six months",
   "Deploying updates in rings, starting with test and pilot groups",
   "Removing the update management tool",
   "Letting users choose whether and when to install each monthly update on their own laptops"
  ],
  "answer": 1,
  "explain": "Ring deployment catches problems on a small group before broad rollout."
 }
]);
