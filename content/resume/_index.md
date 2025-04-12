---
---

<style>
/*
 * Style overrides for Resume page
 */

/* Force the main content area parent to allow full width */
#paige-page-content {
  max-width: none !important;    /* Remove theme max-width */
  width: 100% !important;        /* Try to use full width from article */
  /* Attempt to counteract parent article's align-items-center */
  align-self: stretch !important;
}

/*
 * Optional: If the above doesn't work, uncomment this block
 * to directly target the article centering.
*/
/*
#paige-page {
  align-items: stretch !important; /* Override the align-items-center */
}
*/


/* Container for the resume */
.resume-container {
  width: 100%;               /* Takes width from #paige-page-content */
  max-width: 1100px;         /* Your desired MAX width for the viewer */
                               /* Adjust as needed (e.g., 1200px, 90vw) */
  margin-left: auto;         /* Center the container */
  margin-right: auto;        /* Center the container */
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0;                /* Remove padding if parent handles spacing */
  box-sizing: border-box;
}

/* Styling the PDF iframe */
.resume-pdf { /* Or resume-iframe, match your HTML */
  display: block;            /* Important for layout */
  width: 100%;               /* Fill the .resume-container */
  height: 90vh;              /* Adjust height as needed */
  border: none;              /* Cleaner look for iframe */
  box-sizing: border-box;
}

/* Optional: Adjustments for smaller screens */
@media (max-width: 768px) { /* Adjust breakpoint if needed */
   .resume-container {
      max-width: 95vw;       /* Use viewport width */
   }
   .resume-pdf {
     height: 85vh;
   }
   /* Consider if parent overrides need adjusting */
   /* #paige-page-content { max-width: 100% !important; align-self: auto !important;} */
}
</style>

<div class="resume-container">
  <iframe src="/resume.pdf" type="application/pdf" class="resume-pdf" />

  </div>
