<template>
  <b-container>
    <!-- start text -->
    <div class="text text-center">
      <h4 class="pt-5">FREQUENTLY ASKED QUESTIONS</h4>
      <h2 class="pb-5">COMMON QUESTION & ANSWER</h2>
    </div>
    <!-- end text -->
    <div>
      <b-row>
        <!-- start left list -->
        <b-col lg="5" md="12" sm="12">
          <b-list-group class="boxes">
            <b-list-group-item class="box first btn mb-2" button>
              <b-row>
                <b-col cols="11"><p>Coronavirus Disease 2019 Basics</p></b-col>
                <b-col cols="1"><font-awesome-icon icon="caret-right" /></b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item class="box second btn mb-2" button>
              <b-row>
                <b-col cols="11"><p>How It Spreads</p></b-col>
                <b-col cols="1"><font-awesome-icon icon="caret-right" /></b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item class="box third btn mb-2" button>
              <b-row>
                <b-col cols="11"><p>How to Protect Yourself</p></b-col>
                <b-col cols="1"><font-awesome-icon icon="caret-right" /></b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item class="box forth btn mb-2" button>
              <b-row>
                <b-col cols="11"><p>Symptoms & Testing</p></b-col>
                <b-col cols="1"><font-awesome-icon icon="caret-right" /></b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item class="box fifth btn mb-2" button>
              <b-row>
                <b-col cols="11"><p>Outbreak in Your Community</p></b-col>
                <b-col cols="1"><font-awesome-icon icon="caret-right" /></b-col>
              </b-row>
            </b-list-group-item>
            <b-list-group-item class="box last btn mb-2" button>
              <b-row>
                <b-col cols="11"><p>Myth-Busters of coronavirus</p></b-col>
                <b-col cols="1"><font-awesome-icon icon="caret-right" /></b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <!-- end left list -->
        <!-- start right list -->
        <b-col lg="7" md="12" sm="12">
          <!-- start first accordion -->
          <div class="accordion disease active" style="display: block" role="tablist">
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-1
                  variant="light"
                  ><p>What is a novel coronavirus?</p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      On February 11, 2020 the World Health Organization
                      announced an official name for the disease that is causing
                      the 2019 novel coronavirus outbreak, first identified in
                      Wuhan China. The new name of this disease is coronavirus
                      disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’
                      stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for
                      disease. Formerly, this disease was referred to as “2019
                      novel coronavirus” or “2019-nCoV”.
                      <br />
                      <br />
                      A novel coronavirus is a new coronavirus that has not been
                      previously identified. The virus causing coronavirus
                      disease 2019 (COVID-19), is not the same as the
                      <a href="#"
                        >coronaviruses that commonly circulate among humans</a
                      >
                      and cause mild illness, like the common cold
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-2
                  variant="light"
                  ><p>
                    Why is the disease being called coronavirus disease 2019,
                    COVID-19?
                  </p>
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      On February 11, 2020 the World Health Organization
                      announced an official name for the disease that is causing
                      the 2019 novel coronavirus outbreak, first identified in
                      Wuhan China. The new name of this disease is coronavirus
                      disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’
                      stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for
                      disease. Formerly, this disease was referred to as “2019
                      novel coronavirus” or “2019-nCoV”.
                      <br />
                      <br />
                      There are<a href="#">many types</a>of human coronaviruses
                      including some that commonly cause mild upper-respiratory
                      tract illnesses. COVID-19 is a new disease, caused be a
                      novel (or new) coronavirus that has not previously been
                      seen in humans. The name of this disease was selected
                      following the World Health Organization (WHO) best
                      practiceexternal icon for naming of new human infectious
                      diseases.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-3
                  variant="light"
                  ><p>How can people help stop stigma related to COVID-19?</p>
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      People can fight stigma and help, not hurt, others by
                      providing social support. Counter stigma by learning and
                      sharing facts. Communicating the facts that viruses do not
                      target specific racial or ethnic groups and how COVID-19
                      actually spreads can help stop stigma.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-4
                  variant="light"
                  ><p>
                    Why might someone blame or avoid individuals and groups?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      People in the U.S. may be worried or anxious about friends
                      and relatives who are living in or visiting areas where
                      COVID-19 is spreading. Some people are worried about the
                      disease. Fear and anxiety can lead to social stigma, for
                      example, towards Chinese or other Asian Americans or
                      people who were in quarantine.
                      <br />
                      <br />
                      Stigma is discrimination against an identifiable group of
                      people, a place, or a nation. Stigma is associated with a
                      lack of knowledge about how COVID-19 spreads, a need to
                      blame someone, fears about disease and death, and gossip
                      that spreads rumors and myths.
                      <br />
                      <br />
                      Stigma hurts everyone by creating more fear or anger
                      towards ordinary people instead of the disease that is
                      causing the problem.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- end first accordion -->
          <!-- start second accordion -->
          <div
            class="accordion spreads hidden"
            role="tablist"
            style="display: none"
          >
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-1
                  variant="light"
                  ><p>What is the source of the virus?</p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Coronaviruses are a large family of viruses. Some cause
                      illness in people, and others, such as canine and feline
                      coronaviruses, only infect animals. Rarely, animal
                      coronaviruses that infect animals have emerged to infect
                      people and can spread between people. This is suspected to
                      have occurred for the virus that causes COVID-19. Middle
                      East Respiratory Syndrome (MERS) and Severe Acute
                      Respiratory Syndrome (SARS) are two other examples of
                      coronaviruses that originated from animals and then spread
                      to people. More information about the source and spread of
                      COVID-19 is available on the
                      <a href="#"
                        >Situation Summary: Source and Spread of the Virus.</a
                      >
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-2
                  variant="light"
                  ><p>How does the virus spread?</p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      This virus was first detected in Wuhan City, Hubei
                      Province, China. The first infections were linked to a
                      live animal market, but the virus is now spreading from
                      person-to-person. It’s important to note that
                      person-to-person spread can happen on a continuum. Some
                      viruses are highly contagious (like measles), while other
                      viruses are less so.
                      <br />
                      <br />
                      The virus that causes COVID-19 seems to be spreading
                      easily and sustainably in the community (“community
                      spread”) in<a href="#">
                        some affected geographic areas.</a
                      >
                      Community spread means people have been infected with the
                      virus in an area, including some who are not sure how or
                      where they became infected.
                      <br />
                      <br />
                      Learn what is known about the
                      <a href="#">spread of newly emerged coronaviruses.</a>
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-3
                  variant="light"
                  ><p>
                    Can someone who has had COVID-19 spread the illness to
                    others?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      The virus that causes COVID-19 is<a href="#"
                        >spreading from person-to-person.</a
                      >
                      Someone who is actively sick with COVID-19 can spread the
                      illness to others. That is why CDC recommends that these
                      patients be isolated either in the hospital or at home
                      (depending on how sick they are) until they are better and
                      no longer pose a risk of infecting others.
                      <br />
                      <br />
                      How long someone is actively sick can vary so the decision
                      on when to release someone from isolation is made on a
                      case-by-case basis in consultation with doctors, infection
                      prevention and control experts, and public health
                      officials and involves considering specifics of each
                      situation including disease severity, illness signs and
                      symptoms, and results of laboratory testing for that
                      patient.
                      <br />
                      <br />
                      Current<a href="#">
                        CDC guidance for when it is OK to release someone from
                        isolation</a
                      >
                      is made on a case by case basis and includes meeting all
                      of the following requirements:
                      <br />
                      <br />
                      The patient is free from fever without the use of
                      fever-reducing medications.
                      <br />
                      <br />
                      The patient is no longer showing symptoms, including
                      cough.
                      <br />
                      <br />
                      The patient has tested negative on at least two
                      consecutive respiratory specimens collected at least 24
                      hours apart.
                      <br />
                      <br />
                      Someone who has been released from isolation is not
                      considered to pose a risk of infection to others.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-4
                  variant="light"
                  ><p>
                    Will warm weather stop the outbreak of COVID-19?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      It is not yet known whether weather and temperature impact
                      the spread of COVID-19. Some other viruses, like the
                      common cold and flu, spread more during cold weather
                      months but that does not mean it is impossible to become
                      sick with these viruses during other months. At this time,
                      it is not known whether the spread of COVID-19 will
                      decrease when weather becomes warmer. There is much more
                      to learn about the transmissibility, severity, and other
                      features associated with COVID-19 and investigations are
                      ongoing.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-5
                  variant="light"
                  ><p>
                    Can the virus that causes COVID-19 be spread through food,
                    including refrigerated or frozen food?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Coronaviruses are generally thought to be spread from
                      person-to-person through respiratory droplets. Currently
                      there is no evidence to support transmission of COVID-19
                      associated with food. Before preparing or eating food it
                      is important to always wash your hands with soap and water
                      for 20 seconds for general food safety. Throughout the day
                      wash your hands after blowing your nose, coughing or
                      sneezing, or going to the bathroom.
                      <br />
                      <br />
                      It may be possible that a person can get COVID-19 by
                      touching a surface or object that has the virus on it and
                      then touching their own mouth, nose, or possibly their
                      eyes, but this is not thought to be the main way the virus
                      spreads.
                      <br />
                      <br />
                      In general, because of poor survivability of these
                      coronaviruses on surfaces, there is likely very low risk
                      of spread from food products or packaging that are shipped
                      over a period of days or weeks at ambient, refrigerated,
                      or frozen temperatures.
                      <br />
                      <br />
                      Learn what is known about the
                      <a href="#">spread of COVID-19.</a>
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-6
                  variant="light"
                  ><p>What is community spread?</p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Community spread means people have been infected with the
                      virus in an area, including some who are not sure how or
                      where they became infected.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- end second accordion -->
          <!-- start third accordion -->
          <div
            class="accordion protects hidden"
            role="tablist"
            style="display: none"
          >
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-1
                  variant="light"
                  ><p>
                    What can I do to protect myself and prevent the spread of
                    disease?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><h5>Protection measures for everyone</h5>
                    <p>
                      Stay aware of the latest information on the COVID-19
                      outbreak, available on the WHO website and through your
                      national and local public health authority. Many countries
                      around the world have seen cases of COVID-19 and several
                      have seen outbreaks. Authorities in China and some other
                      countries have succeeded in slowing or stopping their
                      outbreaks. However, the situation is unpredictable so
                      check regularly for the latest news.
                      <br />
                      <br />
                      You can reduce your chances of being infected or spreading
                      COVID-19 by taking some simple precautions:
                      <br />
                      <br />
                      Regularly and thoroughly clean your hands with an
                      alcohol-based hand rub or wash them with soap and water.
                      <br />
                      <br />
                      <b>Why?</b> Washing your hands with soap and water or
                      using alcohol-based hand rub kills viruses that may be on
                      your hands.
                      <br />
                      <br />
                      Maintain at least 1 metre (3 feet) distance between
                      yourself and anyone who is coughing or sneezing.
                      <br />
                      <br />
                      <b>Why?</b> When someone coughs or sneezes they spray
                      small liquid droplets from their nose or mouth which may
                      contain virus. If you are too close, you can breathe in
                      the droplets, including the COVID-19 virus if the person
                      coughing has the disease.
                      <br />
                      <br />
                      Avoid touching eyes, nose and mouth.
                      <br />
                      <br />
                      <b>Why?</b> Hands touch many surfaces and can pick up
                      viruses. Once contaminated, hands can transfer the virus
                      to your eyes, nose or mouth. From there, the virus can
                      enter your body and can make you sick.
                      <br />
                      <br />
                      Make sure you, and the people around you, follow good
                      respiratory hygiene. This means covering your mouth and
                      nose with your bent elbow or tissue when you cough or
                      sneeze. Then dispose of the used tissue immediately.
                      <br />
                      <br />
                      <b>Why?</b> Droplets spread virus. By following good
                      respiratory hygiene you protect the people around you from
                      viruses such as cold, flu and COVID-19.
                      <br />
                      <br />
                      Stay home if you feel unwell. If you have a fever, cough
                      and difficulty breathing, seek medical attention and call
                      in advance. Follow the directions of your local health
                      authority.
                      <br />
                      <br />
                      <b>Why?</b> National and local authorities will have the
                      most up to date information on the situation in your area.
                      Calling in advance will allow your health care provider to
                      quickly direct you to the right health facility. This will
                      also protect you and help prevent spread of viruses and
                      other infections.
                      <br />
                      <br />
                      Keep up to date on the latest COVID-19 hotspots (cities or
                      local areas where COVID-19 is spreading widely). If
                      possible, avoid traveling to places – especially if you
                      are an older person or have diabetes, heart or lung
                      disease.
                      <br />
                      <br />
                      <b>Why?</b> You have a higher chance of catching COVID-19
                      in one of these areas.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-2
                  variant="light"
                  ><p>
                    What should I do if I had close contact with someone who has
                    COVID-19?
                  </p>
                </b-button>
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Household members, intimate partners, and caregivers in a
                      nonhealthcare setting may have close contact2 with a
                      person with symptomatic, laboratory-confirmed COVID-19 or
                      a person under investigation. Close contacts should
                      monitor their health; they should call their healthcare
                      provider right away if they develop symptoms suggestive of
                      COVID-19 (e.g., fever, cough, shortness of breath)
                      <br />
                      <br />
                      Close contacts should also follow these recommendations:
                      <br />
                      <br />
                      Make sure that you understand and can help the patient
                      follow their healthcare provider’s instructions for
                      medication(s) and care. You should help the patient with
                      basic needs in the home and provide support for getting
                      groceries, prescriptions, and other personal needs.
                      <br />
                      <br />
                      Monitor the patient’s symptoms. If the patient is getting
                      sicker, call his or her healthcare provider and tell them
                      that the patient has laboratory-confirmed COVID-19. This
                      will help the healthcare provider’s office take steps to
                      keep other people in the office or waiting room from
                      getting infected. Ask the healthcare provider to call the
                      local or state health department for additional guidance.
                      If the patient has a medical emergency and you need to
                      call 911, notify the dispatch personnel that the patient
                      has, or is being evaluated for COVID-19.
                      <br />
                      <br />
                      Household members should stay in another room or be
                      separated from the patient as much as possible. Household
                      members should use a separate bedroom and bathroom, if
                      available.
                      <br />
                      <br />
                      Prohibit visitors who do not have an essential need to be
                      in the home.
                      <br />
                      <br />
                      Household members should care for any pets in the home. Do
                      not handle pets or other animals while sick. For more
                      information, see COVID-19 and Animals.
                      <br />
                      <br />
                      Make sure that shared spaces in the home have good air
                      flow, such as by an air conditioner or an opened window,
                      weather permitting.
                      <br />
                      <br />
                      Perform hand hygiene frequently. Wash your hands often
                      with soap and water for at least 20 seconds or use an
                      alcohol-based hand sanitizer that contains 60 to 95%
                      alcohol, covering all surfaces of your hands and rubbing
                      them together until they feel dry. Soap and water should
                      be used preferentially if hands are visibly dirty.
                      <br />
                      <br />
                      Avoid touching your eyes, nose, and mouth with unwashed
                      hands.
                      <br />
                      <br />
                      The patient should wear a facemask when you are around
                      other people. If the patient is not able to wear a
                      facemask (for example, because it causes trouble
                      breathing), you, as the caregiver, should wear a mask when
                      you are in the same room as the patient.
                      <br />
                      <br />
                      Wear a disposable facemask and gloves when you touch or
                      have contact with the patient’s blood, stool, or body
                      fluids, such as saliva, sputum, nasal mucus, vomit, urine.
                      <br />
                      <br />
                      Throw out disposable facemasks and gloves after using
                      them. Do not reuse.
                      <br />
                      <br />
                      When removing personal protective equipment, first remove
                      and dispose of gloves. Then, immediately clean your hands
                      with soap and water or alcohol-based hand sanitizer. Next,
                      remove and dispose of facemask, and immediately clean your
                      hands again with soap and water or alcohol-based hand
                      sanitizer.
                      <br />
                      <br />
                      Avoid sharing household items with the patient. You should
                      not share dishes, drinking glasses, cups, eating utensils,
                      towels, bedding, or other items. After the patient uses
                      these items, you should wash them thoroughly (see below
                      “Wash laundry thoroughly”).
                      <br />
                      <br />
                      Clean all “high-touch” surfaces, such as counters,
                      tabletops, doorknobs, bathroom fixtures, toilets, phones,
                      keyboards, tablets, and bedside tables, every day. Also,
                      clean any surfaces that may have blood, stool, or body
                      fluids on them.
                      <br />
                      <br />
                      Use a household cleaning spray or wipe, according to the
                      label instructions. Labels contain instructions for safe
                      and effective use of the cleaning product including
                      precautions you should take when applying the product,
                      such as wearing gloves and making sure you have good
                      ventilation during use of the product.
                      <br />
                      <br />
                      Wash laundry thoroughly.
                      <br />
                      <br />
                      Immediately remove and wash clothes or bedding that have
                      blood, stool, or body fluids on them.
                      <br />
                      <br />
                      Wear disposable gloves while handling soiled items and
                      keep soiled items away from your body. Clean your hands
                      (with soap and water or an alcohol-based hand sanitizer)
                      immediately after removing your gloves.
                      <br />
                      <br />
                      Read and follow directions on labels of laundry or
                      clothing items and detergent. In general, using a normal
                      laundry detergent according to washing machine
                      instructions and dry thoroughly using the warmest
                      temperatures recommended on the clothing label.
                      <br />
                      <br />
                      Place all used disposable gloves, facemasks, and other
                      contaminated items in a lined container before disposing
                      of them with other household waste. Clean your hands (with
                      soap and water or an alcohol-based hand sanitizer)
                      immediately after handling these items. Soap and water
                      should be used preferentially if hands are visibly dirty.
                      <br />
                      <br />
                      Discuss any additional questions with your state or local
                      health department or healthcare provider. Check available
                      hours when contacting your local health department.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-3
                  variant="light"
                  ><p>
                    Who is at higher risk for serious illness from COVID-19?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      <b>
                        Older adults and people of any age who have serious
                        underlying medical conditions </b
                      >may be at higher risk for more serious complications from
                      COVID-19. These people who may be at higher risk of
                      getting very sick from this illness, includes:
                      <br />
                      <br />
                      <b>Older adults</b>
                      <br />
                      <br />
                      <b
                        >People who have serious underlying medical conditions
                        like:
                      </b>
                      <br />
                      <br />
                      Heart disease
                      <br />
                      <br />
                      Diabetes
                      <br />
                      <br />
                      Lung disease
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-4
                  variant="light"
                  ><p>
                    What should people at higher risk of serious illness with
                    COVID-19 do?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      If you are at higher risk of getting very sick from
                      COVID-19, you should: stock up on supplies; take everyday
                      precautions to keep space between yourself and others;
                      when you go out in public, keep away from others who are
                      sick; limit close contact and wash your hands often; and
                      avoid crowds, cruise travel, and non-essential travel. If
                      there is an outbreak in your community, stay home as much
                      as possible. Watch for symptoms and emergency signs. If
                      you get sick, stay home and call your doctor. More
                      information on how to prepare, what to do if you get sick,
                      and how communities and caregivers can support those at
                      higher risk is available on<a href="#">
                        People at Risk for Serious Illness from COVID-19.</a
                      >
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-5
                  variant="light"
                  ><p>Should I wear a mask to protect myself?</p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Only wear a mask if you are ill with COVID-19 symptoms
                      (especially coughing) or looking after someone who may
                      have COVID-19. Disposable face mask can only be used once.
                      If you are not ill or looking after someone who is ill
                      then you are wasting a mask. There is a world-wide
                      shortage of masks, so WHO urges people to use masks
                      wisely.
                      <br />
                      <br />
                      WHO advises rational use of medical masks to avoid
                      unnecessary wastage of precious resources and mis-use of
                      masks (<a href="#">see Advice on the use of masks</a>).
                      <br />
                      <br />
                      The most effective ways to protect yourself and others
                      against COVID-19 are to frequently clean your hands, cover
                      your cough with the bend of elbow or tissue and maintain a
                      distance of at least 1 meter (3 feet) from people who are
                      coughing or sneezing. See basic protective measures
                      against the new coronavirus for more information.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- end third accordion -->
          <!-- start forth accordion -->
          <div
            class="accordion symptom hidden"
            role="tablist"
            style="display: none"
          >
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-1
                  variant="light"
                  ><p>What are the symptoms of COVID-19?</p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      The most common symptoms of COVID-19 are fever, tiredness,
                      and dry cough. Some patients may have aches and pains,
                      nasal congestion, runny nose, sore throat or diarrhea.
                      These symptoms are usually mild and begin gradually. Some
                      people become infected but don’t develop any symptoms and
                      don't feel unwell. Most people (about 80%) recover from
                      the disease without needing special treatment. Around 1
                      out of every 6 people who gets COVID-19 becomes seriously
                      ill and develops difficulty breathing. Older people, and
                      those with underlying medical problems like high blood
                      pressure, heart problems or diabetes, are more likely to
                      develop serious illness. People with fever, cough and
                      difficulty breathing should seek medical attention.
                      <br />
                      <br />
                      Read about <a href="/Symptoms">COVID-19 Symptoms from CDC.gov.</a>
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-2
                  variant="light"
                  ><p>Should I be tested for COVID-19?</p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Not everyone needs to be tested for COVID-19. For
                      information about testing, see
                      <a href="#">Testing for COVID-19.</a>
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-3
                  variant="light"
                  ><p>Where can I get tested for COVID-19?</p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      The process and locations for testing vary from place to
                      place. Contact your state, local, tribal, or territorial
                      department for more information, or reach out to a medical
                      provider. State and local public health departments have
                      received tests from CDC while medical providers are
                      getting tests developed by commercial manufacturers. While
                      supplies of these tests are increasing, it may still be
                      difficult to find someplace to get tested.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-4
                  variant="light"
                  ><p>
                    Can a person test negative and later test positive for
                    COVID-19?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    >Using the CDC-developed diagnostic test, a negative result
                    means that the virus that causes COVID-19 was not found in
                    the person’s sample. In the early stages of infection, it is
                    possible the virus will not be detected.
                    <br />
                    <br />
                    For COVID-19, a negative test result for a sample collected
                    while a person has symptoms likely means that the COVID-19
                    virus is not causing their current illness.</b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- end forth accordion -->
          <!-- start fifth accordion -->
          <div
            class="accordion outbreak hidden"
            role="tablist"
            style="display: none"
          >
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-1
                  variant="light"
                  ><p>What should I do if there is an outbreak in my
                  community?</p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      During an outbreak, stay calm and put your preparedness
                      plan to work. Follow the steps below:
                    </p>
                    <h5>Protect yourself and others.</h5>
                    <p>
                      Stay home if you are sick. Keep away from people who are
                      sick. Limit close contact with others as much as possible
                      (about 6 feet).
                    </p>
                    <h5>Put your household plan into action.</h5>
                    <p>
                      <b>Stay informed about the local COVID-19 situation.</b>
                      Be aware of temporary school dismissals in your area, as
                      this may affect your household’s daily routine.
                      <br />
                      <br />
                      <b>Continue practicing everyday preventive actions.</b>
                      Cover coughs and sneezes with a tissue and wash your hands
                      often with soap and water for at least 20 seconds. If soap
                      and water are not available, use a hand sanitizer that
                      contains 60% alcohol. Clean frequently touched surfaces
                      and objects daily using a regular household detergent and
                      water.
                      <br />
                      <br />
                      <b
                        >Notify your workplace as soon as possible if your
                        regular work schedule changes.</b
                      >
                      Ask to work from home or take leave if you or someone in
                      your household gets sick with
                      <a href="#">COVID-19 symptoms,</a> or if your child’s
                      school is dismissed temporarily.<a href="#">
                        Learn how businesses and employers can plan for and
                        respond to COVID-19.</a
                      >
                      <br />
                      <br />
                      <b>Stay in touch with others by phone or email.</b> If you
                      have a chronic medical condition and live alone, ask
                      family, friends, and health care providers to check on you
                      during an outbreak. Stay in touch with family and friends,
                      especially those at increased risk of developing severe
                      illness, such as older adults and people with severe
                      chronic medical conditions.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-2
                  variant="light"
                  ><p>
                    How do I prepare my children in case of COVID-19 outbreak in
                    our community?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Outbreaks can be stressful for adults and children. Talk
                      with your children about the outbreak, try to stay calm,
                      and reassure them that they are safe. If appropriate,
                      explain to them that most illness from COVID-19 seems to
                      be mild.
                      <br />
                      <br />
                      <a href="#"
                        >Children respond differently to stressful situations
                        than adults</a
                      >
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-3
                  variant="light"
                  ><p>
                    What steps should parents take to protect children during a
                    community outbreak?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      This is a new virus and we are still learning about it,
                      but so far, there does not seem to be a lot of illness in
                      children. Most illness, including serious illness, is
                      happening in adults of working age and older adults. If
                      there cases of COVID-19 that impact your child’s school,
                      the school may dismiss students. Keep track of school
                      dismissals in your community. Read or watch local media
                      sources that report school dismissals. If schools are
                      dismissed temporarily, use alternative childcare
                      arrangements, if needed.
                      <br />
                      <br />
                      If your child/children become sick with COVID-19, notify
                      their childcare facility or school. Talk with teachers
                      about classroom assignments and activities they can do
                      from home to keep up with their schoolwork.
                      <br />
                      <br />
                      Discourage children and teens from gathering in other
                      public places while school is dismissed to help slow the
                      spread of COVID-19 in the community.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-4
                  variant="light"
                  ><p>
                    Will schools be dismissed if there is an outbreak in my
                    community?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Depending on the situation, public health officials may
                      recommend community actions to reduce exposures to
                      COVID-19, such as school dismissals. Read or watch local
                      media sources that report school dismissals or and watch
                      for communication from your child’s school. If schools are
                      dismissed temporarily, discourage students and staff from
                      gathering or socializing anywhere, like at a friend’s
                      house, a favorite restaurant, or the local shopping mall.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-5
                  variant="light"
                  ><p>
                    Can the virus that causes COVID-19 be spread through food,
                    including refrigerated or frozen food?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Coronaviruses are generally thought to be spread from
                      person-to-person through respiratory droplets. Currently
                      there is no evidence to support transmission of COVID-19
                      associated with food. Before preparing or eating food it
                      is important to always wash your hands with soap and water
                      for 20 seconds for general food safety. Throughout the day
                      wash your hands after blowing your nose, coughing or
                      sneezing, or going to the bathroom.
                      <br />
                      <br />
                      It may be possible that a person can get COVID-19 by
                      touching a surface or object that has the virus on it and
                      then touching their own mouth, nose, or possibly their
                      eyes, but this is not thought to be the main way the virus
                      spreads.
                      <br />
                      <br />
                      In general, because of poor survivability of these
                      coronaviruses on surfaces, there is likely very low risk
                      of spread from food products or packaging that are shipped
                      over a period of days or weeks at ambient, refrigerated,
                      or frozen temperatures.
                      <br />
                      <br />
                      Learn what is known about the
                      <a href="#">spread of COVID-19.</a>
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-6
                  variant="light"
                  ><p>
                    Should I go to work if there is an outbreak in my community?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Follow the advice of your local health officials. Stay
                      home if you can. Talk to your employer to discuss working
                      from home, taking leave if you or someone in your
                      household gets sick with
                      <a href="#">COVID-19 symptoms</a>, or if your child’s
                      school is dismissed temporarily. Employers should be aware
                      that more employees may need to stay at home to care for
                      sick children or other sick family members than is usual
                      in case of a community outbreak.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- end fifth accordion -->
          <!-- start last accordion -->
          <div
            class="accordion busters hidden"
            role="tablist"
            style="display: none"
          >
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-1
                  variant="light"
                  ><p>
                    COVID-19 virus can be transmitted in areas with hot and
                    humid climates?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      From the evidence so far, the COVID-19 virus can be
                      transmitted in ALL AREAS, including areas with hot and
                      humid weather. Regardless of climate, adopt protective
                      measures if you live in, or travel to an area reporting
                      COVID-19. The best way to protect yourself against
                      COVID-19 is by frequently cleaning your hands. By doing
                      this you eliminate viruses that may be on your hands and
                      avoid infection that could occur by then touching your
                      eyes, mouth, and nose.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-2
                  variant="light"
                  ><p>
                    Cold weather and snow CANNOT kill the new coronavirus
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      There is no reason to believe that cold weather can kill
                      the new coronavirus or other diseases. The normal human
                      body temperature remains around 36.5°C to 37°C, regardless
                      of the external temperature or weather. The most effective
                      way to protect yourself against the new coronavirus is by
                      frequently cleaning your hands with alcohol-based hand rub
                      or washing them with soap and water.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-3
                  variant="light"
                  ><p>
                    Taking a hot bath does not prevent the new coronavirus
                    disease
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Taking a hot bath will not prevent you from catching
                      COVID-19. Your normal body temperature remains around
                      36.5°C to 37°C, regardless of the temperature of your bath
                      or shower. Actually, taking a hot bath with extremely hot
                      water can be harmful, as it can burn you. The best way to
                      protect yourself against COVID-19 is by frequently
                      cleaning your hands. By doing this you eliminate viruses
                      that may be on your hands and avoid infection that could
                      occur by then touching your eyes, mouth, and nose.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-4
                  variant="light"
                  ><p>
                    The new coronavirus CANNOT be transmitted through mosquito
                    bites.
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      To date there has been no information nor evidence to
                      suggest that the new coronavirus could be transmitted by
                      mosquitoes. The new coronavirus is a respiratory virus
                      which spreads primarily through droplets generated when an
                      infected person coughs or sneezes, or through droplets of
                      saliva or discharge from the nose. To protect yourself,
                      clean your hands frequently with an alcohol-based hand rub
                      or wash them with soap and water. Also, avoid close
                      contact with anyone who is coughing and sneezing.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-5
                  variant="light"
                  ><p>
                    Are hand dryers effective in killing the new coronavirus?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      No. Hand dryers are not effective in killing the
                      2019-nCoV. To protect yourself against the new
                      coronavirus, you should frequently clean your hands with
                      an alcohol-based hand rub or wash them with soap and
                      water. Once your hands are cleaned, you should dry them
                      thoroughly by using paper towels or a warm air dryer.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-6
                  variant="light"
                  ><p>
                    Can an ultraviolet disinfection lamp kill the new
                    coronavirus?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-6"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      UV lamps should not be used to sterilize hands or other
                      areas of skin as UV radiation can cause skin irritation.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-7
                  variant="light"
                  ><p>
                    How effective are thermal scanners in detecting people
                    infected with the new coronavirus?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-7"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      Thermal scanners are effective in detecting people who
                      have developed a fever (i.e. have a higher than normal
                      body temperature) because of infection with the new
                      coronavirus.
                      <br />
                      <br />
                      However, they cannot detect people who are infected but
                      are not yet sick with fever. This is because it takes
                      between 2 and 10 days before people who are infected
                      become sick and develop a fever.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
            <b-card no-body>
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button
                  class="button"
                  block
                  v-b-toggle.accordion-8
                  variant="light"
                  ><p>
                    Do vaccines against pneumonia protect you against the new
                    coronavirus?
                  </p></b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-8"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text
                    ><p>
                      No. Vaccines against pneumonia, such as pneumococcal
                      vaccine and Haemophilus influenza type B (Hib) vaccine, do
                      not provide protection against the new coronavirus.
                      <br />
                      <br />
                      The virus is so new and different that it needs its own
                      vaccine. Researchers are trying to develop a vaccine
                      against 2019-nCoV, and WHO is supporting their efforts.
                      <br />
                      <br />
                      Although these vaccines are not effective against
                      2019-nCoV, vaccination against respiratory illnesses is
                      highly recommended to protect your health.
                    </p></b-card-text
                  >
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
          <!-- end last accordion -->
        </b-col>
        <!-- end right list -->
      </b-row>
    </div>
  </b-container>
</template>
<style scoped>
* a{
  text-decoration: none;
  /* start text */
}
.text h4 {
  color: var(--main-color);
  font-size: calc(var(--default-font-size) + 5px);
}
.text h2 {
  color: var(--gray-color);
  font-weight: bold;
  font-size: calc(var(--default-font-size) + 25px);
}
/* end text */
/* start left list */
.boxes .box p {
  color: var(--gray-color);
}
.boxes .box:hover {
  color: var(--main-color);
  border-color: var(--main-color);
  transition: all 0.5s ease-in-out;
}
.boxes .box:hover p {
  color: var(--main-color);
  transition: all 0.5s ease-in-out;
}
/* end left list */
/* start right list */
.accordion .button {
  width: 100%;
}
.accordion .button:hover {
  color: var(--main-color);
  transition: all 0.4s ease-in-out;
}
.accordion .button p {
  color: var(--gray-color);
  font-weight: bold;
}
/* end right list */
</style>
<script>
export default {
  name: 'faqcomp',
  mounted () {
    const leftbox = document.querySelectorAll('.box')
    const rightbox = document.querySelectorAll('.accordion')
    for (let index = 0; index < leftbox.length; index++) {
      leftbox[index].addEventListener('click', () => {
        for (let i = 0; i < rightbox.length; i++) {
          rightbox[i].style.display = 'none'
          if (leftbox[index].classList.contains('first') && rightbox[i].classList.contains('disease')) {
            rightbox[i].style.display = 'block'
          } if (leftbox[index].classList.contains('second') && rightbox[i].classList.contains('spreads')) {
            rightbox[i].style.display = 'block'
          } if (leftbox[index].classList.contains('third') && rightbox[i].classList.contains('protects')) {
            rightbox[i].style.display = 'block'
          } if (leftbox[index].classList.contains('forth') && rightbox[i].classList.contains('symptom')) {
            rightbox[i].style.display = 'block'
          } if (leftbox[index].classList.contains('fifth') && rightbox[i].classList.contains('outbreak')) {
            rightbox[i].style.display = 'block'
          } if (leftbox[index].classList.contains('last') && rightbox[i].classList.contains('busters')) {
            rightbox[i].style.display = 'block'
          }
        }
      })
    }
  }
}
</script>
