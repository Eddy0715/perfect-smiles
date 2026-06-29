// ── Header Scroll Effect ──
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ── Scroll Progress Indicator ──
const progressBar = document.querySelector('.scroll-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      const scrolled = (winScroll / height) * 100;
      progressBar.style.width = scrolled + '%';
    }
  });
}

// ── Background Blobs Parallax ──
const blobs = document.querySelectorAll('.bg-glow-blob');
if (blobs.length > 0) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    blobs.forEach((blob, index) => {
      const speed = (index + 1) * 0.05;
      blob.style.transform = `translateY(${scrollY * speed}px)`;
    });
  });
}

// ── Cases Data ──
const casesData = [
  {
    num: 2,
    title: "Invisalign",
    category: "invisalign",
    tagLabel: "Invisalign",
    description: "Patient treated with clear aesthetic aligners to resolve spacing and level the occlusal plane.",
    text: "INVISALIGN | PRETREATMENT | POST TREATMENT",
    sections: [
      {
        columns: [
          { heading: "Pre-Treatment", images: ["slide_2_img_1.jpg", "slide_2_img_2.jpg", "slide_2_img_3.jpg"] },
          { heading: "Post-Treatment", images: ["slide_2_img_4.jpg", "slide_2_img_5.jpg", "slide_2_img_6.jpg"] }
        ]
      }
    ]
  },
  {
    num: 3,
    title: "Invisalign",
    category: "invisalign",
    tagLabel: "Invisalign",
    description: "Teenage alignment case showing comprehensive smile correction and crowding resolution.",
    text: "INVISALIGN | PRETREATMENT | POST TREATMENT",
    sections: [
      {
        columns: [
          { heading: "Pre-Treatment", images: ["slide_3_img_1.jpg", "slide_3_img_2.jpg", "slide_3_img_3.jpg", "slide_3_img_4.jpg"] },
          { heading: "Post-Treatment", images: ["slide_3_img_5.jpg", "slide_3_img_6.jpg", "slide_3_img_7.jpg", "slide_3_img_8.jpg"] }
        ]
      }
    ]
  },
  {
    num: 4,
    title: "Invisalign",
    category: "invisalign",
    tagLabel: "Invisalign",
    description: "Correction of deep bite, leveling the arches, and closing spaces over an 8-month treatment duration.",
    text: "INVISALIGN | PRETREATMENT | POST TREATMENT | TREATMENT DURATION 8 MONTHS",
    sections: [
      {
        columns: [
          { heading: "Pre-Treatment", images: ["slide_4_img_1.jpg", "slide_4_img_2.jpg", "slide_4_img_3.jpg"] },
          { heading: "Post-Treatment", images: ["slide_4_img_4.jpg", "slide_4_img_5.jpg", "slide_4_img_6.jpg"] }
        ]
      }
    ]
  },
  {
    num: 5,
    title: "CASE NO - 1 Non Extraction Cases",
    category: "self-ligating-braces",
    tagLabel: "Damon SLB",
    description: "Patient with crowding and impacted canine treated with Damon Q Self-Ligating Bracket system. Continuation shows canine disimpacted using diode laser. Treatment duration: 15 Months.",
    text: "Non Extraction Cases | CASE NO - 1 | PRETREATMENT POST TREATMENT | PATIENT WITH CROWDING AND IMPACTED CANINE TREATED WITH DAMON Q SELF LIGATING BRACKET SYSTEM | CANINE DISIMPACTED USING DIODE LASER | DURATION 15 MONTHS",
    sections: [
      {
        title: "Damon Q Self-Ligating System",
        columns: [
          { heading: "PRETREATMENT", images: ["slide_5_img_1.jpg", "slide_5_img_2.jpg", "slide_5_img_3.jpg", "slide_5_img_4.jpg", "slide_5_img_5.jpg"] },
          { heading: "POST TREATMENT", images: ["slide_5_img_6.jpg", "slide_5_img_7.jpg", "slide_5_img_8.jpg", "slide_5_img_9.jpg", "slide_5_img_10.jpg"] }
        ]
      },
      {
        title: "Canine Disimpacted using Diode Laser",
        columns: [
          { heading: "PRETREATMENT", images: ["slide_6_img_1.jpg", "slide_6_img_2.jpg"] },
          { heading: "POST TREATMENT", images: ["slide_6_img_3.jpg", "slide_6_img_4.jpg", "slide_6_img_5.jpg"] }
        ]
      }
    ]
  },
  {
    num: 7,
    title: "CASE NO - 2",
    category: "cleft-nam palatal-expanders self-ligating-braces",
    tagLabel: "Cleft / Expander",
    description: "PREVIOUSLY CLEFT PALATE TREATED PATIENT TREATED WITH NITI PALATAL EXPANDER AND FIXED MBT MECHANOTHERAPHY",
    text: "PRETREATMENT POST TREATMENT | PREVIOUSLY CLEFT PALATE TREATED PATIENT TREATED WITH NITI PALATAL EXPANDER AND FIXED MBT MECHANOTHERAPHY | CASE NO -2 | MBT PRESCRIPTION USED WITH CUNITI WIRES MISSING MOLAR TO BE REPLACED PROSTHETICALLY",
    sections: [
      {
        columns: [
          { heading: "PRETREATMENT", images: ["slide_7_img_1.jpg", "slide_7_img_2.jpg", "slide_7_img_3.jpg", "slide_7_img_4.jpg", "slide_7_img_5.jpg"] },
          { heading: "POST TREATMENT", images: ["slide_7_img_6.jpg", "slide_7_img_7.jpg", "slide_7_img_8.jpg", "slide_7_img_9.jpg", "slide_7_img_10.jpg"] }
        ]
      },
      {
        title: "MBT Fixed Mechanotherapy & Transverse Expansion NITI PALATAL EXPANDER",
        columns: [
          { heading: "PRETREATMENT", images: ["slide_8_img_1.jpg", "slide_8_img_2.jpg", "slide_8_img_5.jpg"] },
          { heading: "POST TREATMENT", images: ["slide_8_img_3.jpg", "slide_8_img_4.jpg"] }
        ]
      }
    ]
  },
  {
    num: 9,
    title: "CASE NO - 3",
    category: "self-ligating-braces",
    tagLabel: "MBT Braces",
    description: `
      <p style="margin: 0 0 0.5rem 0; font-weight: 500;">• CLASS I SKELETAL PATTERN, ANGLES CLASS I MOLAR RELATION BILATERALLY WITH IMPACTED CANINE IN LOWER ARCH</p>
      <p style="margin: 0; font-weight: 500;">• OBLIQUELY IMPACTED 33 IS ORIENTED TO CERVICAL 3 RD OF ROOTS OF 41 and 42 AND ALSO HAS A DILACERATED ROOT</p>
    `,
    text: "CASE NO - 3 | PRETREATMENT | POSTTREATMENT | CLASS I SKELETAL PATTERN,ANGLES CLASS I MOLAR RELATION BILATERALLY WITH IMPACTED CANINE IN LOWER ARCH OBLIQUELY IMPACTED 33 IS ORIENTED TO CERVICAL 3 RD OF ROOTS OF 41 and 42 AND ALSO HAS A DILACERATED ROOT | 43 BROUGHT INTO ARCH | 33 BROUGHT TRANSPORTED TO 4TH QUADRANT | LEVELLING AND ALIGNING OF 33AND 43 INTO ARCH ON SAME SIDE | CBCT IMAGE",
    sections: [
      {
        columns: [
          { heading: "PRETREATMENT", images: ["slide_9_img_1.jpg", "slide_9_img_2.jpg", "slide_9_img_3.png", "slide_9_img_4.png", "slide_9_img_5.png"] },
          { heading: "POST TREATMENT", images: ["slide_9_img_6.png", "slide_9_img_7.png", "slide_9_img_8.jpg", "slide_9_img_9.jpg", "slide_9_img_10.jpg"] }
        ]
      },
      {
        title: "Canine Arch Alignment & CBCT Imaging",
        columns: [
          { heading: "43 BROUGHT INTO ARCH", images: ["slide_10_img_1.jpg"] },
          { heading: "33 BROUGHT TRANSPORTED TO 4TH QUADRANT", images: ["slide_10_img_2.jpg"] },
          { heading: "LEVELLING AND ALIGNING OF 33 AND 43 ON SAME SIDE", images: ["slide_10_img_3.jpg"] }
        ],
        bottom: {
          heading: "CBCT IMAGE",
          images: ["slide_10_img_4.jpg", "slide_10_img_5.jpg"],
          layout: "row"
        }
      }
    ]
  },
  {
    num: 11,
    title: "CASE - 4 Infant orthopedic",
    category: "cleft-nam",
    tagLabel: "Cleft / NAM",
    description: "Nasoalveolar Molding (NAM) therapy in a 4-day-old infant with unilateral cleft lip, alveolus and palate deformity. Duration: 5 Months.",
    text: "PRETREATMENT | POST NAM | POST LIP SURGERY | PRESURGICAL NASOALVEOLAR MOLDING IN A 4 DAY OLD INFANT WITH UNILATERAL CLEFTLIP ,ALVEOLUS AND PALATE DEFORMITY TREATMENT DURATION - 5 MONTHS | CASE - 4 Infant orthopedic",
    sections: [
      {
        columns: [
          { heading: "PRETREATMENT", images: ["slide_11_img_2.jpg", "slide_11_img_5.jpg"] },
          { heading: "POST NAM", images: ["slide_11_img_3.jpg", "slide_11_img_6.jpg"] },
          { heading: "POST LIP SURGERY", images: ["slide_11_img_4.jpg", "slide_11_img_7.jpg"] }
        ]
      }
    ]
  },
  {
    num: 12,
    title: "CASE NO 5  Myofunctional therapy case (FACEMASK )",
    category: "myofunctional-jaw",
    tagLabel: "Myofunctional",
    description: "Growth modification and orthopedic development in a Class III skeletal pattern case utilizing facemask therapy.",
    text: "CASE NO 5 Myofunctional therapy case (FACEMASK ) | PRE TREATMENT POST FUNCTIONAL PHASE WITH FACE MASK | PRE TREATMENT POST FUNCTIONAL PHASE",
    sections: [
      {
        title: "Face Profile & Alignment",
        columns: [
          { heading: "PRE TREATMENT", images: ["slide_12_img_1.jpg", "slide_12_img_2.jpg"] },
          { heading: "POST FUNCTIONAL PHASE", images: ["slide_12_img_3.jpg", "slide_12_img_4.jpg"] },
          { heading: "WITH FACE MASK", images: ["slide_12_img_5.jpg", "slide_12_img_6.jpg"] }
        ]
      },
      {
        title: "Occlusal Relationship",
        columns: [
          { heading: "PRE TREATMENT", images: ["slide_12_img_7.jpg"] },
          { heading: "POST FUNCTIONAL PHASE", images: ["slide_12_img_8.jpg"] }
        ]
      },
      {
        title: "Continuation: Facemask Therapy & Fixed MBT Treatment",
        columns: [
          { heading: "FACEMASK THERAPY - 13 MONTHS", images: ["slide_13_img_1.jpg", "slide_13_img_2.jpg", "slide_13_img_3.jpg"] },
          { heading: "POST FIXED TREATMENT", images: ["slide_13_img_4.jpg", "slide_13_img_5.jpg", "slide_13_img_6.jpg"] }
        ]
      }
    ]
  },
  {
    num: 13,
    title: "CASE -TWIN BLOCK",
    category: "myofunctional-jaw",
    tagLabel: "Twin Block",
    description: "Twin Block Appliance Therapy showing pre-treatment, post-functional phase, and post-fixed treatment stages.",
    text: "CASE -TWIN BLOCK | PRE TREATMENT POST FUNCTIONAL PHASE POST FIXED",
    sections: [
      {
        columns: [
          { heading: "PRE TREATMENT", images: ["slide_14_img_1.jpg", "slide_14_img_2.jpg"] },
          { heading: "POST FUNCTIONAL PHASE", images: ["slide_14_img_3.jpg", "slide_14_img_4.jpg"] },
          { heading: "POST FIXED", images: ["slide_14_img_5.jpg", "slide_14_img_6.jpg"] }
        ]
      }
    ]
  },
  {
    num: 14,
    title: "TWIN BLOCK",
    category: "myofunctional-jaw",
    tagLabel: "Twin Block",
    description: "• TWIN BLOCK APPLIANCE THERAPY WITH MBT FIXED MECHANOTHERAPY",
    text: "TWIN BLOCK | PRE TREATMENT | POST FUNCTIONAL PHASE | POST FIXED APPLIANCE | TWIN BLOCK APPLIANCE THERAPY WITH MBT FIXED MECHANOTHERAPY",
    sections: [
      {
        title: "Functional Phase",
        columns: [
          { heading: "PRE TREATMENT", images: ["slide_15_img_1.jpg"] },
          { heading: "POST FUNCTIONAL PHASE", images: ["slide_15_img_2.jpg"] },
          { heading: "POST FIXED APPLIANCE", images: ["slide_15_img_3.jpg"] }
        ]
      },
      {
        title: "Fixed Therapy Phase (Continuation)",
        columns: [
          { heading: "PRE TREATMENT WITH TWIN BLOCK", images: ["slide_16_img_1.jpg", "slide_16_img_2.jpg"] },
          { heading: "POST FUNCTIONAL PHASE FIXED APPLIANCE", images: ["slide_16_img_3.jpg", "slide_16_img_4.png"] },
          { heading: "POST FIXED APPLIANCE", images: ["slide_16_img_5.jpg"] }
        ]
      }
    ]
  },
  {
    num: 15,
    title: "CASE NO 7 High pull headgear",
    category: "myofunctional-jaw",
    tagLabel: "Myofunctional",
    description: "• PHASE I-CLASS I SKELETAL PATTERN GROWING PATIENT WITH PROGNATHIC MAXILLA TREATED WITH HIGH PULL HEADGEAR<br>• DURATION -14 MONTHS",
    text: "PRETREATMENT | CASE NO 7 High pull headgear | PRETREATMENT | POST HEADGEAR THERAPY | PHASE I-CLASS I SKELETAL PATTERN GROWING PATIENT WITH PROGNATHIC MAXILLA TREATED WITH HIGH PULL HEADGEAR DURATION -14 MONTHS | POST TREATMENT",
    sections: [
      {
        columns: [
          { heading: "PRETREATMENT", images: ["slide_17_img_1.jpg", "slide_17_img_6.png"] },
          { heading: "POST TREATMENT", images: ["slide_17_img_3.png", "slide_17_img_8.jpg"] }
        ]
      }
    ]
  },
  {
    num: 16,
    title: "CASE NO-8 Mutilated malocclusion cases",
    category: "self-ligating-braces tads-mini-implants",
    tagLabel: "TADs / Braces",
    description: "Mutilated malocclusion case treated with fixed appliances and TAD-anchored absolute retraction. Space closure and molar uprighting utilizing titanium mini implants.",
    text: "CASE NO-8 Mutilated malocclusion cases | PRETREATMENT | POST TREATMENT | MUTILATED MALOCCLUSION TREATED WITH FIXED APPLIANCE MINI IMPLANT RETRACTION | MOLAR UP RIGHTING ALSO DONE IN 47 DURATION 14 MONTHS",
    sections: [
      {
        title: "Fixed Appliance & Mini Implant Retraction",
        columns: [
          { heading: "PRETREATMENT", images: ["slide_18_img_1.jpg", "slide_18_img_2.jpg", "slide_18_img_3.jpg", "slide_18_img_4.jpg", "slide_18_img_5.png"] },
          { heading: "POST TREATMENT", images: ["slide_18_img_6.png", "slide_18_img_7.png", "slide_18_img_8.jpg", "slide_18_img_9.jpg", "slide_18_img_10.jpg"] }
        ]
      },
      {
        title: "Continuation: Molar Uprighting & Space Closure (Duration: 14 Months)",
        columns: [
          { heading: "PRETREATMENT", images: ["slide_19_img_1.jpg", "slide_19_img_2.jpg", "slide_19_img_3.jpg"] },
          { heading: "POST TREATMENT", images: ["slide_19_img_4.jpg", "slide_19_img_5.jpg", "slide_19_img_6.jpg"] }
        ]
      }
    ]
  },
  {
    num: 17,
    title: "CASE NO 9: Orthognathic surgical cases",
    category: "surgical-orthodontics cleft-nam",
    tagLabel: "Surgical Cleft",
    description: "• CLEFT LIP AND PALATE PATIENT TREATED WITH LEFORT 1 OSTEOTOMY AND ADVANCEMENT<br>• PRE SURGICAL ORTHODONTICS DURATION 14 MONTHS",
    text: "CASE NO – 9 Orthognathic surgical cases | CLEFT LIP AND PALATE PATIENT TREATED WITH LEFORT 1 OSTEOTOMY AND ADVANCEMENT PRE SURGICAL ORTHODONTICS DURATION 14 MONTHS | PRETREATMENT | PRE SURGICAL | POST SURGICAL",
    sections: [
      {
        columns: [
          { heading: "PRETREATMENT", images: ["slide_20_img_1.jpg", "slide_20_img_3.jpg"] },
          { heading: "PRE SURGICAL", images: ["slide_20_img_2.jpg", "slide_20_img_4.jpg"] },
          { heading: "POST SURGICAL", images: ["slide_20_img_5.jpg"] }
        ]
      }
    ]
  },
  {
    num: 18,
    title: "CASE NO 10: Lefort 1 superior impaction case",
    category: "surgical-orthodontics",
    tagLabel: "Surgical",
    description: "• Presurgical orthodontics",
    text: "CASE NO – 10 | Lefort 1 supior impaction case Presurgical orthodontics",
    images: ["slide_21_img_1.jpg"]
  },
  {
    num: 19,
    title: "Case No-11: Extraction cases",
    category: "extractions-crowding",
    tagLabel: "Extractions",
    description: "• BIMAXILLARY PROTRUSION CASE TREATED WITH EXTRACTION OF ALL FOUR 1st PREMOLARS.<br>• DURATION – 17 MONTHS<br>• MBT PRESCRIPTION",
    text: "Case No-11 Extraction cases | Pre-treatment | Post-treatment | BIMAXILLARY PROTRUSION CASE TREATED WITH EXTRACTION OF ALL FOUR 1stPREMOLARS. DURATION – 17 MONTHS MBT PRESCRIPTION",
    sections: [
      { columns: [{ heading: "Pre-treatment", images: ["slide_22_img_1.jpg"] }, { heading: "Post-treatment", images: ["slide_22_img_3.png"] }] },
      { columns: [{ heading: "Pre-treatment", images: ["slide_22_img_8.png"] }, { heading: "Post-treatment", images: ["slide_22_img_6.png"] }] },
      { columns: [{ heading: "Pre-treatment", images: ["slide_22_img_5.jpg"] }, { heading: "Post-treatment", images: ["slide_22_img_10.jpg"] }] }
    ]
  },
  {
    num: 20,
    title: "Case No. 12: Extraction space closure",
    category: "extractions-crowding self-ligating-braces",
    tagLabel: "Extractions",
    description: "Extraction space closure case detailing leveling and space management, followed by aesthetic aligner treatment.",
    text: "PRETREATMENT | Case No. 12 | Lets create some smile | Dr.Abin Mathew",
    sections: [
      {
        title: "Pre-Treatment",
        columns: [
          { heading: "Pretreatment Face Profiles", images: ["slide_23_img_1.jpg", "slide_23_img_2.jpg"] },
          { heading: "Pretreatment Dental Scans", images: ["slide_23_img_3.jpg", "slide_23_img_4.jpg", "slide_23_img_5.jpg"] }
        ]
      },
      {
        title: "Lets create some smile (Treatment Progress)",
        columns: [
          { heading: "Aligner & Fixed Therapy space management", images: ["slide_24_img_1.jpg", "slide_24_img_2.jpg", "slide_24_img_3.jpg", "slide_24_img_4.jpg", "slide_24_img_5.jpg", "slide_24_img_6.jpg", "slide_24_img_7.jpg"] }
        ]
      }
    ]
  },
  {
    num: 21,
    title: "Case No. 13",
    category: "extractions-crowding",
    tagLabel: "Extractions",
    description: "• CROWDING CASE TREATED WITH EXTRACTION OF ALL FOUR 1st PREMOLARS<br>• MBT PRESCRIPTION",
    text: "Case No. 13 | PRE TREATMENT POST TREATMENT | CROWDING CASE TREATED WITH EXTRACTION OF ALL FOUR 1st PREMOLARS MBT PRESCRIPTION",
    sections: [
      { columns: [{ heading: "PRE TREATMENT", images: ["slide_25_face_pre_side.jpg", "slide_25_face_pre_front.jpg"] }, { heading: "POST TREATMENT", images: ["slide_25_face_post_side.jpg", "slide_25_face_post_front.jpg"] }] },
      { columns: [{ heading: "PRE TREATMENT", images: ["slide_25_teeth_pre_front.jpg"] }, { heading: "POST TREATMENT", images: ["slide_25_teeth_post_front.jpg"] }] },
      { columns: [{ heading: "PRE TREATMENT", images: ["slide_25_teeth_pre_upper.jpg"] }, { heading: "POST TREATMENT", images: ["slide_25_teeth_post_upper.jpg"] }] },
      { columns: [{ heading: "PRE TREATMENT", images: ["slide_25_teeth_pre_lower.jpg"] }, { heading: "POST TREATMENT", images: ["slide_25_teeth_post_lower.jpg"] }] }
    ]
  },
  {
    num: 22,
    title: "Case No. 14: Absolute anchorage case",
    category: "extractions-crowding tads-mini-implants",
    tagLabel: "TADs / Extractions",
    description: "• PATIENT WITH PROCLINED UPPER TEETH WITH LOWER ANTERIOR CROWDING TREATED WITH EXTRACTION OF ALL FOUR 1ST PREMOLARS.<br>• ABSOLUTE ANCHORAGE CASE UTILIZING 1.5 X 9 MM TITANIUM IMPLANT RETRACTION",
    text: "Case No. 14 | PATIENT WITH PROCLINED UPPER TEETH WITH LOWER ANTERIOR CROWDING TREATED WITH EXTRACTION OF ALL FOUR 1ST PREMOLARS. ABSOLUTE ANCHORAGE CASE 1.5 X 9 MM TITANIUM IMPLANT RETRACTION | PRETREATMENT MID TREATMENT | Case N0. 14 (Contn..) | Absolute anchorage case treated with minimplant retraction",
    sections: [
      {
        title: "Face Profile and Alignment",
        columns: [
          { heading: "PRE TREATMENT", images: ["slide_26_face1_front.jpg", "slide_26_face2_side.jpg"] },
          { heading: "POST TREATMENT", images: ["slide_26_face3_post.jpg"] }
        ]
      },
      {
        title: "Fixed Appliance & Implant Retraction Phase",
        columns: [
          { heading: "PRETREATMENT", images: ["slide_26_pre_side1.jpg", "slide_26_pre_side2.jpg", "slide_26_pre_side3.jpg"] },
          { heading: "MID TREATMENT", images: ["slide_26_mid_side1.jpg", "slide_26_mid_side2.jpg", "slide_26_mid_side3.jpg"] }
        ]
      },
      {
        title: "Anchor Management & Space Closure (Continuation)",
        columns: [
          { heading: "Absolute Anchorage Retraction", images: ["slide_27_brace1.jpg", "slide_27_brace2.jpg", "slide_27_brace3.jpg"] },
          { heading: "Arch Development", images: ["slide_27_arch1.jpg", "slide_27_arch2.jpg", "slide_27_arch3.jpg", "slide_27_arch4.jpg"] }
        ]
      }
    ]
  },
  {
    num: 23,
    title: "Case No. 15",
    category: "extractions-crowding self-ligating-braces",
    tagLabel: "Extractions",
    description: "• PATIENT WITH BUCCALY ERUPTED CANINE AND WITH MISSING LOWER 1ST PREMOLARS WAS TREATED WITH EXTRACTION OF SINGLE PREMOLAR IN UPPER ARCH AND RETRACTED WITH T LOOP.<br>• MBT PRESCRIPTION",
    text: "Case No. 15 | PRETREATMENT POST TREATMENT | PATIENT WITH BUCCALY ERUPTED CANINE AND WITH MISSING LOWER 1ST PREMOLARS WAS TREATED WITH EXTRACTION OF SINGLE PREMOLAR IN UPPER ARCH AND RETRACTED WITH T LOOP. MBT PRESCRIPTION",
    sections: [
      { columns: [{ heading: "PRE TREATMENT", images: ["slide_28_img_1.jpg"] }, { heading: "POST TREATMENT", images: ["slide_28_img_5.jpg"] }] },
      { columns: [{ heading: "PRE TREATMENT", images: ["slide_28_img_3.jpg"] }, { heading: "POST TREATMENT", images: ["slide_28_img_6.jpg"] }] },
      { bottom: { images: ["slide_28_img_9.png"], layout: "column" } },
      { columns: [{ heading: "PRE TREATMENT", images: ["slide_28_img_4.jpg"] }, { heading: "POST TREATMENT", images: ["slide_28_img_8.png"] }] }
    ]
  },
  {
    num: 24,
    title: "Case No. 16( herbst)",
    category: "myofunctional-jaw palatal-expanders",
    tagLabel: "Herbst Appliance",
    description: "• FIXED FUNCTIONAL APPLIANCE THERAPY FOR skeletal Class II correction.",
    text: "Case No. 16( herbst) fixed functional appliance | LETS DO SOME EXPANSION",
    sections: [
      {
        columns: [
          { heading: "Pre-Treatment", images: ["slide_29_img_1.jpg", "slide_29_img_2.jpg", "slide_29_img_3.jpg", "slide_29_img_4.jpg", "slide_29_img_5.jpg"] },
          { heading: "Post-Treatment", images: ["slide_29_img_6.jpg", "slide_29_img_7.jpg", "slide_29_img_8.jpg", "slide_29_img_9.jpg", "slide_29_img_10.jpg"] }
        ]
      },
      {
        title: "Maxillary Palatal Expansion (Continuation)",
        columns: [
          { heading: "Pre-Treatment", images: ["slide_30_img_1.jpg"] },
          { heading: "Post-Treatment", images: ["slide_30_img_2.jpg"] }
        ]
      }
    ]
  },
  {
    num: 26,
    title: "Tad-Assisted Canine Tipping",
    category: "tads-mini-implants",
    tagLabel: "TADs",
    description: "• MINI IMPLANTS TO THE RESCUE WHEN YOU NEED TIPPING OF CANINES",
    text: "MINI IMPLANTS TO THE RESCUE WHEN YOU NEED TIPPING OF CANINES",
    sections: [{ columns: [{ heading: "Pre-Treatment", images: ["slide_32_img_1.png"] }, { heading: "Post-Treatment", images: ["slide_32_img_2.png"] }] }]
  },
  {
    num: 27,
    title: "Extractions to the Rescue",
    category: "extractions-crowding",
    tagLabel: "Extractions",
    description: "Managing severe arch crowding and occlusion using strategic extractions and fixed brackets.",
    text: "EXTRACTIONS TO THE RESCUE | Dr.Abin Mathew | Dr.Abin Mathew",
    sections: [{ columns: [{ heading: "Pre-Treatment", images: ["slide_33_img_1.jpg"] }, { heading: "Post-Treatment", images: ["slide_33_img_2.png"] }] }]
  },
  {
    num: 28,
    title: "Deep Bite Correction with Damon SLB Brackets",
    category: "self-ligating-braces",
    tagLabel: "Damon SLB",
    description: "Leveling the dental arches and correcting severe deep bite using the Damon Self-Ligating System.",
    text: "DEEP BITE CORRECTION WITH DAMON SLB BRACKETS | Dr.Abin Mathew | Dr.Abin Mathew",
    sections: [{ columns: [{ heading: "Pre-Treatment", images: ["slide_34_img_1.jpg"] }, { heading: "Post-Treatment", images: ["slide_34_img_2.jpg"] }] }]
  },
  {
    num: 29,
    title: "Michigan Splint Therapy",
    category: "tmj-management",
    tagLabel: "TMJ Splint",
    description: "• PATIENT CAME WITH A C/O OF BRUXISM AND PAIN IN TMJ AND WAS TREATED WITH The Michigan Splint<br>• It increases occlusal stability, muscle relaxation, mandibular posture deprogramming, and vertical dimension modification",
    text: "PATIENT CAME WITH A C/O OF BRUXISM AND PAIN IN TMJ AND WAS TREATED WITH The Michigan Splint It increases occlusal stability, muscle relaxation, mandibular posture deprogramming, and vertical dimension modification | Dr. Abin Mathew",
    images: ["slide_35_img_1.jpg"]
  },
  {
    num: 30,
    title: "Infrazygomatic Crest Implants",
    category: "tads-mini-implants",
    tagLabel: "TADs",
    description: "• Infrazygomatic crest implants provide stable anchorage support. They are placed on the zygomatic bone above the maxilla, allowing for more control and versatility in tooth movement.",
    text: "Infrazygomatic crest implants have become increasingly popular in orthodontics due to their ability to provide stable anchorage support. These implants are placed on the zygomatic bone, which is located above the maxilla, allowing for more control and versatility in tooth movement..",
    images: ["slide_36_img_1.jpg"]
  },
  {
    num: 31,
    title: "Molar Intrusion using Mini Implants",
    category: "tads-mini-implants",
    tagLabel: "TADs",
    description: "• Intruding over-erupted maxillary molars using mini implants to level the occlusal bite forces.",
    text: "Molar intrusion using mini inplants",
    images: ["slide_37_img_1.jpg"]
  },
  {
    num: 32,
    title: "Cleft Patient Treated with Expansion Appliance and Fixed Appliance",
    category: "cleft-nam palatal-expanders",
    tagLabel: "Cleft Palate",
    description: "• CLEFT PATIENT TREATED WITH EXPANSION APPLIANCE AND FIXED APPLIANCE",
    text: "CLEFT PATIENT TREATED WITH EXPANSION APPLIANCE AND FIXED APPLAIANCE | Dr. Abin Mathew | Dr. Abin Mathew",
    sections: [
      {
        columns: [
          { heading: "PRE TREATMENT", images: ["slide_38_img_1.png", "slide_38_img_2.png"] },
          { heading: "POST TREATMENT", images: ["slide_38_img_4.png", "slide_38_img_5.png", "slide_38_img_6.png"] }
        ]
      }
    ]
  }
];

// ── Render Case Cards ──
const galleryGrid = document.getElementById('galleryGrid');

function buildCarouselHTML(col) {
  const total = col.images.length;
  const carouselId = 'car-' + Math.random().toString(36).slice(2, 9);
  if (total === 1) {
    return `
      <div class="treatment-section">
        <h4 class="treatment-title" style="font-size:0.95rem;line-height:1.3;">${col.heading}</h4>
        <div class="img-carousel" data-total="1" id="${carouselId}">
          <div class="img-carousel-track">
            <img src="./assets/cases_new/${col.images[0]}?v=6" alt="${col.heading}" loading="lazy" onclick="openLightbox('./assets/cases_new/${col.images[0]}?v=6')">
          </div>
        </div>
      </div>`;
  }
  return `
    <div class="treatment-section">
      <h4 class="treatment-title" style="font-size:0.95rem;line-height:1.3;">${col.heading}</h4>
      <div class="img-carousel" data-total="${total}" id="${carouselId}">
        <div class="img-carousel-track">
          ${col.images.map(img => `<img src="./assets/cases_new/${img}?v=6" alt="${col.heading}" loading="lazy" onclick="openLightbox('./assets/cases_new/${img}?v=6')">`).join('')}
        </div>
        <button class="carousel-btn prev" aria-label="Previous"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg></button>
        <button class="carousel-btn next" aria-label="Next"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
        <span class="carousel-counter">1 / ${total}</span>
      </div>
      <div class="carousel-dots">
        ${col.images.map((_, i) => `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-carousel="${carouselId}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`).join('')}
      </div>
    </div>`;
}

function renderCases() {
  galleryGrid.innerHTML = '';
  casesData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'report-card reveal';
    card.setAttribute('data-category', item.category);

    let contentHTML = `
      <div class="card-header">
        <h3>${item.title}</h3>
        <span class="slide-tag">${item.tagLabel}</span>
      </div>
      <div class="case-description">${item.description}</div>
    `;

    if (item.sections && item.sections.length > 0) {
      item.sections.forEach(sec => {
        if (sec.title) {
          contentHTML += `<h4 style="color:var(--gold-primary);font-size:1.05rem;font-weight:700;margin:1.8rem 0 1rem;border-top:1px solid rgba(223,186,115,0.12);padding-top:1.5rem;text-transform:uppercase;letter-spacing:1px;">${sec.title}</h4>`;
        }
        if (sec.top) {
          contentHTML += `
            <div class="case-single-layout" style="margin-bottom:1.5rem;">
              <div class="single-image-container treatment-images-grid">
                ${sec.top.images.map(img => `<img src="./assets/cases_new/${img}?v=6" alt="Top Detail" loading="lazy" onclick="openLightbox('./assets/cases_new/${img}?v=6')">`).join('')}
              </div>
            </div>`;
        }
        if (sec.columns && sec.columns.length > 0) {
          const numCols = sec.columns.length;
          contentHTML += `
            <div class="case-treatment-layout" style="grid-template-columns:repeat(${numCols},1fr);gap:2rem;">
              ${sec.columns.map(col => buildCarouselHTML(col)).join('')}
            </div>`;
        }
        if (sec.bottom) {
          const headingHTML = sec.bottom.heading ? `<h4 class="treatment-title" style="margin-bottom:1rem;">${sec.bottom.heading}</h4>` : '';
          const flexStyle = sec.bottom.layout === 'row' ? 'flex-direction:row;gap:1rem;' : 'flex-direction:column;gap:1rem;';
          const imgStyle = sec.bottom.layout === 'row' ? 'flex:1;width:50%;' : 'width:100%;';
          contentHTML += `
            <div class="treatment-section" style="max-width:800px;margin:1.5rem auto 0;">
              ${headingHTML}
              <div class="treatment-images-grid" style="${flexStyle}">
                ${sec.bottom.images.map(img => `<img src="./assets/cases_new/${img}?v=6" alt="Bottom Detail" loading="lazy" onclick="openLightbox('./assets/cases_new/${img}?v=6')" style="${imgStyle}">`).join('')}
              </div>
            </div>`;
        }
      });
    }

    if (item.images && item.images.length === 1) {
      contentHTML += `
        <div class="case-single-layout">
          <div class="single-image-container treatment-images-grid">
            <img src="./assets/cases_new/${item.images[0]}?v=6" alt="${item.title}" loading="lazy" onclick="openLightbox('./assets/cases_new/${item.images[0]}?v=6')">
          </div>
        </div>`;
    }

    contentHTML += `<div class="seo-text-block">${item.text}</div>`;
    card.innerHTML = contentHTML;
    galleryGrid.appendChild(card);
  });
}

// ── Carousel Logic ──
function initCarousels() {
  document.querySelectorAll('.img-carousel').forEach(carousel => {
    const total = parseInt(carousel.getAttribute('data-total'));
    if (!total || total <= 1) return;
    const track = carousel.querySelector('.img-carousel-track');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');
    const counter = carousel.querySelector('.carousel-counter');
    const id = carousel.id;
    const dots = document.querySelectorAll(`.carousel-dot[data-carousel="${id}"]`);
    let current = 0;

    function goTo(index) {
      current = Math.max(0, Math.min(index, total - 1));
      track.style.transform = `translateX(-${current * 100}%)`;
      if (counter) counter.textContent = `${current + 1} / ${total}`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      if (prevBtn) prevBtn.disabled = current === 0;
      if (nextBtn) nextBtn.disabled = current === total - 1;
    }

    prevBtn && prevBtn.addEventListener('click', e => { e.stopPropagation(); goTo(current - 1); });
    nextBtn && nextBtn.addEventListener('click', e => { e.stopPropagation(); goTo(current + 1); });
    dots.forEach(dot => dot.addEventListener('click', () => goTo(parseInt(dot.getAttribute('data-index')))));

    let touchStartX = 0;
    carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
    });

    goTo(0);
  });
}

// ── Filter Tabs ──
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      document.querySelectorAll('.report-card').forEach(card => {
        const categories = card.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ── Lightbox ──
let zoomScale = 1.0;
let isDragging = false;
let startX = 0, startY = 0;
let translateX = 0, translateY = 0;

const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const zoomInBtn = document.getElementById('zoomInBtn');
const zoomOutBtn = document.getElementById('zoomOutBtn');
const zoomResetBtn = document.getElementById('zoomResetBtn');

window.openLightbox = function(imgSrc) {
  resetZoom();
  lightboxImg.src = imgSrc;
  lightboxModal.classList.add('active');
  document.body.style.overflow = 'hidden';
  document.querySelector('.lightbox-container').focus();
};

function closeLightbox() {
  lightboxModal.classList.remove('active');
  document.body.style.overflow = '';
  resetZoom();
}

function updateImageTransform() {
  lightboxImg.style.transform = `scale(${zoomScale}) translate(${translateX / zoomScale}px, ${translateY / zoomScale}px)`;
}
function zoomIn() { if (zoomScale < 4.0) { zoomScale += 0.25; updateImageTransform(); } }
function zoomOut() { if (zoomScale > 0.5) { zoomScale -= 0.25; updateImageTransform(); } }
function resetZoom() {
  zoomScale = 1.0; translateX = 0; translateY = 0;
  if (lightboxImg) lightboxImg.style.transform = 'scale(1) translate(0px, 0px)';
}

lightboxClose.addEventListener('click', closeLightbox);
zoomInBtn.addEventListener('click', e => { e.stopPropagation(); zoomIn(); });
zoomOutBtn.addEventListener('click', e => { e.stopPropagation(); zoomOut(); });
zoomResetBtn.addEventListener('click', e => { e.stopPropagation(); resetZoom(); });

document.addEventListener('keydown', e => {
  if (!lightboxModal.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === '+' || e.key === '=') zoomIn();
  if (e.key === '-') zoomOut();
});

lightboxImg.addEventListener('mousedown', e => {
  if (zoomScale <= 1.0) return;
  isDragging = true; startX = e.clientX - translateX; startY = e.clientY - translateY;
  lightboxImg.style.transition = 'none';
});
window.addEventListener('mousemove', e => {
  if (!isDragging) return;
  translateX = e.clientX - startX; translateY = e.clientY - startY;
  updateImageTransform();
});
window.addEventListener('mouseup', () => {
  if (isDragging) { isDragging = false; lightboxImg.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'; }
});
lightboxImg.addEventListener('touchstart', e => {
  if (zoomScale <= 1.0) return;
  isDragging = true; startX = e.touches[0].clientX - translateX; startY = e.touches[0].clientY - translateY;
  lightboxImg.style.transition = 'none';
});
lightboxImg.addEventListener('touchmove', e => {
  if (!isDragging) return;
  translateX = e.touches[0].clientX - startX; translateY = e.touches[0].clientY - startY;
  updateImageTransform();
});
lightboxImg.addEventListener('touchend', () => {
  if (isDragging) { isDragging = false; lightboxImg.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'; }
});
lightboxModal.addEventListener('click', e => { if (e.target === lightboxModal) closeLightbox(); });

// ── Reveal on Scroll ──
function initReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('active'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    revealElements.forEach(el => revealOnScroll.observe(el));
  }
}

// ── Mobile Menu ──
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  if (menuToggle && mobileNav) {
    const mobileLinks = mobileNav.querySelectorAll('a');
    const toggleMenu = () => {
      menuToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
      document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
    };
    menuToggle.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    }));
  }
}

// ── Init ──
renderCases();
initCarousels();
initFilters();
initReveal();
initMobileMenu();
