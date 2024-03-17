function verifyForm() {
  var e = 0,
    i = !0;
  return (
    $(".form-control").map(function () {
      var i = $(this).val(),
        n = $(this).prop("name");
      $(this).prop("required") &&
        "" == i &&
        (e++, console.log("Field no passed: " + n));
    }),
    console.log("Total form errors: " + e),
    e > 0 &&
      ((i = !1),
      toastr.error(
        "<span style=''>Please provide all mandatory fields</span>"
      )),
    i
  );
}
function autoResize() {
  (this.style.height = "auto"), (this.style.height = this.scrollHeight + "px");
}
$(document).ready(function () {
  $.each(
    {
      checkbox1: [
        'I ask the Royal Commission to examine whether Government policies and actions inhibited free speech in New Zealand, including in the exercise of \'soft power\' as opposed to explicit censorship. I believe that many small and cumulative decisions and actions undertaken by the government contributed to a repressive atmosphere where it was felt that dissenting views and ideas on the COVID response could not be expressed. Some examples of areas to explore include: \n \n - The Prime Minister\'s insistence that the Government was the only reliable source of information, as evidenced by statements such as "if you do not hear it from us it is not the truth," and the reference to the "Podium of Truth". \n\n - The creation of organisations such as "the Disinformation Project," by authorities such as the Department of the Prime Minister and Cabinet, who worked to characterise differing political opinions as "disinformation." \n\n - The suppression of dissenting views regarding the COVID response on social media, and the extent of the Government\'s influence in these moderation decisions. \n\n - Threats from professional bodies to punish those who expressed views dissenting to the Government\'s COVID response. \n\n - The New Zealand Bill of Rights Act states that New Zealanders are entitled to "seek, receive, and impart information and opinions of any kind in any form.',
        'I urge the Royal Commission to investigate whether Government policies and actions restricted freedom of speech in New Zealand, including through \'soft power\' measures rather than explicit censorship. I believe that numerous small decisions and actions by the government contributed to an environment where expressing dissenting views on the COVID response was discouraged. Some areas for investigation include:\n\n - The Prime Minister\'s assertion that the Government was the sole reliable source of information, exemplified by statements like "if you do not hear it from us it is not the truth," and the establishment of the "Podium of Truth."\n\n - The establishment of bodies like "the Disinformation Project" by authorities such as the Department of the Prime Minister and Cabinet, which sought to label differing political opinions as "disinformation."\n\n - The suppression of dissenting views on the COVID response on social media, and the extent of the Government\'s influence over moderation decisions.\n\n - Threats from professional bodies to penalise individuals expressing dissenting views on the Government\'s COVID response. The New Zealand Bill of Rights Act affirms the right of New Zealanders to "seek, receive, and impart information and opinions of any kind in any form."',
        'I request the Royal Commission to assess whether Government actions and policies in New Zealand impeded freedom of speech, including through \'soft power\' rather than explicit censorship. I believe that numerous small decisions and actions by the government contributed to an environment where expressing dissenting views on the COVID response was discouraged.\n\n Some areas for investigation include:\n\n - The Prime Minister\'s assertion that the Government was the sole reliable source of information, exemplified by statements like "if you do not hear it from us it is not the truth," and the establishment of the "Podium of Truth."\n\n - The establishment of bodies like "the Disinformation Project" by authorities such as the Department of the Prime Minister and Cabinet, which sought to label differing political opinions as "disinformation."\n\n - The suppression of dissenting views on the COVID response on social media, and the extent of the Government\'s influence over moderation decisions.\n\n - Threats from professional bodies to penalise individuals expressing dissenting views on the Government\'s COVID response. The New Zealand Bill of Rights Act affirms the right of New Zealanders to "seek, receive, and impart information and opinions of any kind in any form."',
        'I call on the Royal Commission to examine whether Government policies and actions hindered freedom of speech in New Zealand, including through \'soft power\' rather than explicit censorship. I believe that numerous small decisions and actions by the government contributed to an environment where expressing dissenting views on the COVID response was discouraged.\n\nSome areas for investigation include:\n\n- The Prime Minister\'s assertion that the Government was the sole reliable source of information, exemplified by statements like "if you do not hear it from us it is not the truth," and the establishment of the "Podium of Truth."\n\n- The establishment of bodies like "the Disinformation Project" by authorities such as the Department of the Prime Minister and Cabinet, which sought to label differing political opinions as "disinformation."\n\n- The suppression of dissenting views on the COVID response on social media, and the extent of the Government\'s influence over moderation decisions.\n\n- Threats from professional bodies to penalise individuals expressing dissenting views on the Government\'s COVID response. The New Zealand Bill of Rights Act affirms the right of New Zealanders to "seek, receive, and impart information and opinions of any kind in any form."',
        'I urge the Royal Commission to investigate whether Government actions and policies in New Zealand restricted freedom of speech, including through \'soft power\' rather than explicit censorship. I believe that numerous small decisions and actions by the government contributed to an environment where expressing dissenting views on the COVID response was discouraged.\n\nSome areas for investigation include:\n\n- The Prime Minister\'s assertion that the Government was the sole reliable source of information, exemplified by statements like "if you do not hear it from us it is not the truth," and the establishment of the "Podium of Truth."\n\n- The establishment of bodies like "the Disinformation Project" by authorities such as the Department of the Prime Minister and Cabinet, which sought to label differing political opinions as "disinformation."\n\n- The suppression of dissenting views on the COVID response on social media, and the extent of the Government\'s influence over moderation decisions.\n\n- Threats from professional bodies to penalise individuals expressing dissenting views on the Government\'s COVID response. The New Zealand Bill of Rights Act affirms the right of New Zealanders to "seek, receive, and impart information and opinions of any kind in any form."',
        'I ask the Royal Commission to examine whether Government policies and actions impeded freedom of speech in New Zealand, including through \'soft power\' measures rather than explicit censorship. I believe that numerous small decisions and actions by the government contributed to an environment where expressing dissenting views on the COVID response was discouraged.\n\nSome areas for investigation include:\n\n- The Prime Minister\'s assertion that the Government was the sole reliable source of information, exemplified by statements like "if you do not hear it from us it is not the truth," and the establishment of the "Podium of Truth."\n\n- The establishment of bodies like "the Disinformation Project" by authorities such as the Department of the Prime Minister and Cabinet, which sought to label differing political opinions as "disinformation."\n\n- The suppression of dissenting views on the COVID response on social media, and the extent of the Government\'s influence over moderation decisions.\n\n- Threats from professional bodies to penalise individuals expressing dissenting views on the Government\'s COVID response. The New Zealand Bill of Rights Act affirms the right of New Zealanders to "seek, receive, and impart information and opinions of any kind in any form."',
        'I request the Royal Commission to assess whether Government actions and policies in New Zealand restricted freedom of speech, including through \'soft power\' rather than explicit censorship. I believe that numerous small decisions and actions by the government contributed to an environment where expressing dissenting views on the COVID response was discouraged.\n\nSome areas for investigation include:\n\n- The Prime Minister\'s assertion that the Government was the sole reliable source of information, exemplified by statements like "if you do not hear it from us it is not the truth," and the establishment of the "Podium of Truth."\n\n- The establishment of bodies like "the Disinformation Project" by authorities such as the Department of the Prime Minister and Cabinet, which sought to label differing political opinions as "disinformation."\n\n- The suppression of dissenting views on the COVID response on social media, and the extent of the Government\'s influence over moderation decisions.\n\n- Threats from professional bodies to penalise individuals expressing dissenting views on the Government\'s COVID response. The New Zealand Bill of Rights Act affirms the right of New Zealanders to "seek, receive, and impart information and opinions of any kind in any form."',
      ],
      checkbox2: [
        "I ask the Royal Commission to examine whether the protection provided by the Human Rights Act and other legislation was sufficient for people who faced repercussions in their employment and other areas for their opinions held on the COVID response. I understand that throughout the pandemic there were reports of various legal proceedings involving New Zealanders who faced repercussions to their livelihood on the basis of their holding and expressing dissenting views regarding the COVID pandemic, particularly in their areas of employment.",
        "I urge the Royal Commission to investigate whether the protections offered by the Human Rights Act and other laws were adequate for individuals who experienced consequences in their jobs and other aspects of life due to their views on the COVID response. I understand that throughout the pandemic, there were reports of various legal proceedings involving New Zealanders who faced repercussions to their livelihood on the basis of holding and expressing dissenting views regarding the COVID pandemic, particularly in their areas of employment.",
        "I request the Royal Commission to assess if the safeguards provided by the Human Rights Act and similar laws were effective for individuals who encountered repercussions in their employment and other spheres for their COVID response-related opinions. I understand that throughout the pandemic, there were reports of various legal proceedings involving New Zealanders who faced repercussions to their livelihood on the basis of holding and expressing dissenting views regarding the COVID pandemic, particularly in their areas of employment.",
        "I call on the Royal Commission to review if the safeguards provided by the Human Rights Act and other laws were enough for individuals who faced consequences in their employment and other domains for their views on the COVID response. I understand that throughout the pandemic, there were reports of various legal proceedings involving New Zealanders who faced repercussions to their livelihood on the basis of holding and expressing dissenting views regarding the COVID pandemic, particularly in their areas of employment.",
        "I implore the Royal Commission to scrutinise whether the protections under the Human Rights Act and other statutes were adequate for individuals who experienced repercussions in their employment and other domains for their views on the COVID response. I understand that throughout the pandemic, there were reports of various legal proceedings involving New Zealanders who faced repercussions to their livelihood on the basis of holding and expressing dissenting views regarding the COVID pandemic, particularly in their areas of employment.",
        "I ask the Royal Commission to examine whether the protection provided by the Human Rights Act and other legislation was sufficient for people who faced repercussions in their employment and other areas for their opinions on the COVID response. I understand that throughout the pandemic, there were reports of various legal proceedings involving New Zealanders who faced repercussions to their livelihood on the basis of holding and expressing dissenting views regarding the COVID pandemic, particularly in their areas of employment.",
        "I urge the Royal Commission to investigate whether the protection provided by the Human Rights Act and other legislation was sufficient for people who faced repercussions in their employment and other areas for their opinions on the COVID response. I understand that throughout the pandemic, there were reports of various legal proceedings involving New Zealanders who faced repercussions to their livelihood on the basis of holding and expressing dissenting views regarding the COVID pandemic, particularly in their areas of employment.",
      ],
      checkbox3: [
        "I ask the Royal Commission to examine whether academic freedom in New Zealand's universities was faithfully upheld, as required by the Education and Training Act, with regard to views on the COVID response. New Zealand's Universities have the cultural and statutory duty to act as 'critic and conscience of society, questioning and testing received wisdom. This is integral to the academic freedom New Zealand's academics enjoy, and included the right to test and question prevailing wisdom regarding the COVID response. Many academics in New Zealand engaged in conversations in planning, communicating, and assessing the Government's response to COVID-19, taking a wide variety of views and positions.\n\nThis examination should include exploring the protections for academics who dissented from prevailing views on the COVID response, but also for the academics who worked as communicators for the Government's health response, who have allegedly faced abuse and threats to their personal safety for their work around the Government's COVID response.",
        "I ask the Royal Commission to examine whether academic freedom in New Zealand's universities was faithfully upheld, as required by the Education and Training Act, with regard to views on the COVID response. New Zealand's Universities have the cultural and statutory duty to act as 'critic and conscience of society, questioning and testing received wisdom. This is integral to the academic freedom New Zealand's academics enjoy, and included the right to test and question prevailing wisdom regarding the COVID response. Many academics in New Zealand engaged in conversations in planning, communicating, and assessing the Government's response to COVID-19, taking a wide variety of views and positions.\n\n This examination should include exploring the protections for academics who dissented from prevailing views on the COVID response, but also for the academics who worked as communicators for the Government's health response, who have allegedly faced abuse and threats to their personal safety for their work around the Government's COVID response.",
        "I urge the Royal Commission to investigate whether academic freedom in New Zealand's universities was effectively maintained, as mandated by the Education and Training Act, concerning perspectives on the COVID response. New Zealand's Universities have the cultural and statutory duty to act as 'critic and conscience of society, questioning and testing received wisdom. This is integral to the academic freedom New Zealand's academics enjoy, and included the right to test and question prevailing wisdom regarding the COVID response. Many academics in New Zealand engaged in conversations in planning, communicating, and assessing the Government's response to COVID-19, taking a wide variety of views and positions.\n\n This investigation should include examining the protections for academics who dissented from prevailing views on the COVID response, as well as for the academics who worked as communicators for the Government's health response, who have reportedly faced abuse and threats to their personal safety for their work around the Government's COVID response.",
        "I request the Royal Commission to assess whether academic freedom in New Zealand's universities was adequately preserved, as stipulated by the Education and Training Act, in relation to opinions on the COVID response. New Zealand's Universities have the cultural and statutory duty to act as 'critic and conscience of society, questioning and testing received wisdom. This is integral to the academic freedom New Zealand's academics enjoy, and included the right to test and question prevailing wisdom regarding the COVID response. Many academics in New Zealand engaged in conversations in planning, communicating, and assessing the Government's response to COVID-19, taking a wide variety of views and positions.\n\n This assessment should include an examination of the protections for academics who dissented from prevailing views on the COVID response, as well as for the academics who worked as communicators for the Government's health response, who have reportedly faced abuse and threats to their personal safety for their work around the Government's COVID response.",
        "I call on the Royal Commission to review whether academic freedom in New Zealand's universities was sufficiently respected, as mandated by the Education and Training Act, regarding perspectives on the COVID response. New Zealand's Universities have the cultural and statutory duty to act as 'critic and conscience of society, questioning and testing received wisdom. This is integral to the academic freedom New Zealand's academics enjoy, and included the right to test and question prevailing wisdom regarding the COVID response. Many academics in New Zealand engaged in conversations in planning, communicating, and assessing the Government's response to COVID-19, taking a wide variety of views and positions.\n\n This review should include an examination of the protections for academics who dissented from prevailing views on the COVID response, as well as for the academics who worked as communicators for the Government's health response, who have reportedly faced abuse and threats to their personal safety for their work around the Government's COVID response.",
        "I implore the Royal Commission to scrutinise whether academic freedom in New Zealand's universities was adequately protected, as required by the Education and Training Act, concerning views on the COVID response. New Zealand's Universities have the cultural and statutory duty to act as 'critic and conscience of society, questioning and testing received wisdom. This is integral to the academic freedom New Zealand's academics enjoy, and included the right to test and question prevailing wisdom regarding the COVID response. Many academics in New Zealand engaged in conversations in planning, communicating, and assessing the Government's response to COVID-19, taking a wide variety of views and positions.\n\n  This scrutiny should include an examination of the protections for academics who dissented from prevailing views on the COVID response, as well as for the academics who worked as communicators for the Government's health response, who have reportedly faced abuse and threats to their personal safety for their work around the Government's COVID response.",
        "I urge the Royal Commission to investigate whether academic freedom in New Zealand's universities was effectively maintained, as mandated by the Education and Training Act, concerning perspectives on the COVID response. New Zealand's Universities have the cultural and statutory duty to act as 'critic and conscience of society, questioning and testing received wisdom. This is integral to the academic freedom New Zealand's academics enjoy, and included the right to test and question prevailing wisdom regarding the COVID response. Many academics in New Zealand engaged in conversations in planning, communicating, and assessing the Government's response to COVID-19, taking a wide variety of views and positions. This investigation should include examining the protections for academics who dissented from prevailing views on the COVID response, as well as for the academics who worked as communicators for the Government's health response, who have reportedly faced abuse and threats to their personal safety for their work around the Government's COVID response.",
      ],
      checkbox4: [
        "I ask the Royal Commission to examine the effects of the Government's COVID response on New Zealand's social cohesion generally.\n\nI believe in free speech due to the positive effects it provides to the modern, democratic, liberal society that we wish to maintain. This includes enhancing social cohesion, where dissenting views are tolerated and a 'live and let live' attitude is accepted between those who disagree on the answers to great issues of the day, including how to best deal with a crisis like a global pandemic.",
        "I ask the Royal Commission to examine the effects of the Government's COVID response on New Zealand's social cohesion generally.\n\n I believe in free speech due to the positive effects it provides to the modern, democratic, liberal society that we wish to maintain. This includes enhancing social cohesion, where dissenting views are tolerated and a 'live and let live' attitude is accepted between those who disagree on the answers to great issues of the day, including how to best deal with a crisis like a global pandemic.",
        "I urge the Royal Commission to investigate the impact of the Government's COVID response on New Zealand's social cohesion in general.\n\n I believe in free speech due to its positive effects on the modern, democratic, liberal society that we strive to uphold. This includes fostering social cohesion, where divergent views are respected and a spirit of tolerance prevails among those who differ on major issues, such as how to address a crisis like a global pandemic.",
        "I request the Royal Commission to assess the consequences of the Government's COVID response on New Zealand's social cohesion overall.\n\n I advocate for free speech because of its beneficial effects on the contemporary, democratic, liberal society that we aim to uphold. This includes promoting social cohesion, where dissenting opinions are accepted and a mindset of mutual respect exists among those with differing views on significant issues, including how to effectively manage a crisis like a global pandemic.",
        "I call on the Royal Commission to review the impact of the Government's COVID response on New Zealand's social cohesion in general.\n\n I support free speech due to its positive impact on the modern, democratic, liberal society that we aspire to maintain. This includes bolstering social cohesion, where varying viewpoints are welcomed and an ethos of tolerance prevails among those who hold differing perspectives on critical issues, such as how to best respond to a crisis like a global pandemic.",
        "I implore the Royal Commission to scrutinise the effects of the Government's COVID response on New Zealand's social cohesion generally.\n\n I believe in free speech because of its constructive effects on the contemporary, democratic, liberal society that we endeavor to preserve. This includes strengthening social cohesion, where dissenting views are embraced and a culture of mutual respect exists among individuals with differing opinions on pressing matters, including how to address a crisis like a global pandemic.",
        "I ask the Royal Commission to examine the effects of the Government's COVID response on New Zealand's social cohesion generally.\n\n I believe in free speech due to the positive effects it provides to the modern, democratic, liberal society that we wish to maintain. This includes enhancing social cohesion, where dissenting views are tolerated and a 'live and let live' attitude is accepted between those who disagree on the answers to great issues of the day, including how to best deal with a crisis like a global pandemic.",
        "I request the Royal Commission to assess the consequences of the Government's COVID response on New Zealand's social cohesion overall. I advocate for free speech because of its beneficial effects on the contemporary, democratic, liberal society that we aim to uphold. This includes promoting social cohesion, where dissenting opinions are accepted and a mindset of mutual respect exists among those with differing views on significant issues, including how to effectively manage a crisis like a global pandemic.",
      ],
    },
    function (e, i) {
      i.forEach(function (i, n) {
        $(`#${e}`).attr(`data-message${n + 1}`, i);
      });
    }
  ),
    console.log("Ready!");
  let e = document.getElementById("Body");
  e.addEventListener("input", autoResize, !1),
    autoResize.call(e),
    $("#submitCampaignFormBtn").click(function () {
      let e;
      (e = verifyForm()),
        e &&
          ($("#sendLoader").show(),
          $("#submitCampaignFormBtn").prop("disabled", !0),
          document.getElementById("regForm").submit());
    }),
    $("body").click(function (e) {
      if ("addCampaignTargetsBtn" == e.target.id) {
        let e,
          i = [],
          n = $("#campaign_email_id").val(),
          t = $("#targets_mode").val();
        if (
          ($(".targets").map(function () {
            2 == t
              ? ((e = $(this).val()), i.push(e))
              : ((e = $(this).data("id")),
                $(this).prop("checked") && i.push(e));
          }),
          0 == i.length)
        )
          toastr.error(
            "<span style=''>Please select at least one target</span>"
          );
        else if (confirm("Add selected target(s) to the campaign?")) {
          let e = { targets: i, messageid: n },
            t = "https://campaign.engineering/add-campaign-targets";
          $.post(t, { item: JSON.stringify(e) }).done(function () {
            toastr.success(
              "<span style=''>Selected target(s) were added to the current campaign</span>"
            );
          });
        }
      }
      if ("clearRecipients" == e.target.id) {
        let e = [];
        if (
          ($(".targets").map(function () {
            e.push($(this).data("id")), $(this).prop("checked", !1);
          }),
          e.length > 0 && confirm("Remove all targets from messaging?"))
        ) {
          let i = { targets: e },
            n = "https://campaign.engineering/remove-campaign-targets";
          $.post(n, { item: JSON.stringify(i) }).done(function () {
            toastr.success(
              "<span style=''>All targets were removed from messaging</span>"
            );
          });
        }
      }
    }),
    $("body").change(function (e) {
      if (
        (console.log("Element changed: " + e.target.id),
        "targetsGroup" == e.target.id)
      ) {
        let e = $("#campaign_email_id").val(),
          i = $("#targetsGroup").val();
        if (0 != i) {
          let n = { id: e, group: i },
            t = "https://campaign.engineering/get-recipients-by-group2";
          $.post(t, { item: JSON.stringify(n) }).done(function (e) {
            $("#groupTargetsSection").html(e);
          });
        }
      }
      if ("targetRecipients" == e.target.id) {
        let e = $("#campaign_email_id").val(),
          i = $("#targetRecipients").val();
        if (0 != i) {
          let n = { id: e, name: i },
            t = "https://campaign.engineering/add-group-targets";
          $.post(t, { item: JSON.stringify(n) }).done(function (e) {
            toastr.success(
              "<span style=''>Selected target(s) were added to the current campaign</span>"
            );
          });
        }
      }
    });
}),
  $(document).ready(function () {
    function e() {
      var e = $(".message-checkbox:checked")
          .map(function () {
            return $(this).attr("data-message");
          })
          .get()
          .join("\n\n"),
        i = $("#Your-thoughts").val(),
        n = e;
      e && i && (n += "\n\n"), (n += i), $("#Body").val(n);
    }
    $(".message-checkbox").change(function () {
      if (
        ($(this).parent().toggleClass("checked", this.checked), this.checked)
      ) {
        for (var i = [], n = 1; n <= 7; n++) {
          var t = $(this).data("message" + n);
          t && i.push(t);
        }
        var s = i[Math.floor(Math.random() * i.length)];
        $(this).attr("data-message", s);
      } else $(this).removeAttr("data-message");
      e();
    }),
      $("#Your-thoughts").on("input", function () {
        e();
      });
  });
