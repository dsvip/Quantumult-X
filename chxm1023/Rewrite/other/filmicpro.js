/*************************************

项目功能：filmicpro 解锁高级功能
下载地址：https://t.cn/AiE8fHDr
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https:\/\/filmicpro\.oracle\.bendingspoonsapps\.com\/v2\/users\/setup url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/filmicpro.js

[mitm]

hostname = filmicpro.oracle.bendingspoonsapps.com

*************************************/


var chxm1023 = JSON.parse($response.body);

    chxm1023 = 
{
  "me" : {
    "non_consumables_ids" : [
      "FilterPackAdamant",
      "CinematographerKit",
      "FilterPackCharcoal"
    ],
    "active_subscriptions_ids" : [

    ],
    "privacy_notice" : {
      "required_consents" : [

      ],
      "is_at_least_16" : "unknown",
      "last_acknowledged_version" : "1.0.0"
    },
    "unique_id" : "B122404E-FEB5-4510-9C8B-86297BC2FD0D",
    "active_bundle_subscriptions" : [

    ],
    "is_spooner" : false,
    "terms_of_service" : {
      "last_accepted_version" : "1.2.0"
    }
  },
  "settings" : {
    "full_app_lifetime_purchase_id" : "com.cinegenix.filmic.pro.filmic_standard_t15",
    "monetization_strategy" : "soft",
    "__is_free__" : false,
    "__experiments__" : {
      "old_payers_survey" : 0
    },
    "show_survey" : false,
    "keep_current_version_survey_link" : "https://rc1userl9j3bfjcc7ck2.fra1.qualtrics.com/jfe/form/SV_aV6sZpLhR8C0LlQ",
    "force_monetization_behaviour" : "disabled",
    "__min_required_build_version__" : "0.0.0",
    "sign_up_survey_link" : "https://rc1userl9j3bfjcc7ck2.fra1.qualtrics.com/jfe/form/SV_6nTfoYJbDU2XLbU",
    "monetization_type" : "subscription",
    "idfa_tracking_enabled" : false,
    "comparison_primary_subscription_id" : "com.cinegenix.filmic.pro.1w_t6_1w_bis",
    "__privacy_notice_version__" : "1.0.0",
    "comparison_secondary_subscription_id" : "com.cinegenix.filmic.pro.1y_t80_1w_bis",
    "max_requests_per_version" : 5,
    "__encryption_public_key__" : "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6WMNkl4avAdHhYGc20hq\n8DcVtWanEtvuzM7g80Pe8Tv+eyrGyO1+XrgOUu7FRW2TFAl1q1r+3Uls0Y4Xyevi\n1F52DlSrKUJ84fpHIlhMhG8fGKTtAEOZ/CeSj4eUIjGqZe79/BAsEs1A5TZEKdlw\n24oeuMklhCeJ09Im/cU5FQJ18f6Ew8Dqmp7lLKsXoUA8hhBAPbcN7cb4cX6pvNWC\n+alZ9yX2sm4gs3cqjHPsLIEptJkaR469ZcSxqbBNtduS+DMRyhVD+M9ekjdv6aaE\nmRuFumWRtLtGvL9QfyOvTQPsp4eI/O4iZUH7A/W9L67WiYWDPhyknGd7fjIaEedS\n5wIDAQAB\n-----END PUBLIC KEY-----",
    "close_paywall_button_alpha_percentage" : 20,
    "subscription_paywall_type" : "comparison",
    "__terms_of_service_effective_date__" : "2022-10-19T12:00:00+00:00",
    "__privacy_notice_url__" : "https://support.bendingspoons.com/privacy.html?app=436577167&version=1.0.0",
    "subscription_soft_intro_paywall_type" : "inverted_checkbox",
    "__terms_of_service_version__" : "1.2.0",
    "review_skip_survey" : true,
    "main_subscription_id" : "com.cinegenix.filmic.pro.1w_t6_bis",
    "__is_baseline__" : false,
    "intro_paywall_frequency" : "1",
    "review_show_native_prompt_chance" : 0.5,
    "checkbox_subscription_id" : "com.cinegenix.filmic.pro.1w_t6_1w_bis",
    "__privacy_policy_version__" : "1.0.0",
    "__privacy_policy_url__" : "https://support.bendingspoons.com/privacy.html?app=436577167&version=1.0.0",
    "comparison_subscription_id" : "com.cinegenix.filmic.pro.1y_t80_1w",
    "soft_trigger_factor" : 0,
    "min_time_between_requests" : 180,
    "subscription_soft_exit_paywall_type" : "comparison",
    "__encryption_key_id__" : "53bfd4440016c",
    "subscription_hard_paywall_type" : "comparison",
    "__is_testflight__" : false,
    "__identity__" : {
      "token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImY1YWVmMWQ0ODg2YjQwZDY4MTIzZTk5OWQ4YWY5ZDljIn0.eyJwYXlsb2FkIjp7ImJhY2tlbmRfaWQiOiJCMTIyNDA0RS1GRUI1LTQ1MTAtOUM4Qi04NjI5N0JDMkZEMEQiLCJ1c2VyX2lkIjoiMTkwNzgyRjItMTc3Ny00OTA1LUI2MDgtNzBGNTY0QkZDMzhGIiwiaXNfZnJlZSI6ZmFsc2UsImlzX3Nwb29uZXIiOmZhbHNlLCJpc19zdWJzY3JpYmVkIjpmYWxzZSwiY3VycmVudF9pbnN0YWxsYXRpb25fdGltZSI6IjIwMjItMTEtMTFUMDc6MDQ6MDUrMDA6MDAiLCJmaXJzdF9pbnN0YWxsYXRpb25fdGltZSI6IjIwMjItMTEtMTFUMDc6MDQ6MDUrMDA6MDAiLCJwcml2YWN5X3BvbGljeSI6eyJsYXN0X2Fja25vd2xlZGdlZF92ZXJzaW9uIjoiMS4wLjAifSwic2V0dGluZ3MiOnt9fSwiaXNzIjoib3JhY2xlMiIsImlhdCI6MTY2ODE1MDQxMywibmJmIjoxNjY4MTUwNDEzLCJleHAiOjE2NjgyMzY4MTN9.wcsB31j6M8cmo5mx6nICH3PQ85qKrbC-qYs3ELFxLbw",
      "expiration" : "2022-11-12T07:06:53.503823+00:00"
    },
    "__encryption_algorithm__" : "RSA2048PKCS1",
    "hard_trigger_factor" : 1,
    "__terms_of_service_url__" : "https://support.bendingspoons.com/tos.html?app=436577167&version=1.2.0"
  },
  "force_updater" : {
    "suggested_build_version" : "0.0.0",
    "suggested_update_frequency" : 0,
    "action" : "do_nothing"
  },
  "legal_notifications" : {
    "to_notify_privacy_policy" : false,
    "to_notify_terms_of_service" : false
  },
  "products" : {
    "consumables" : [

    ],
    "subscriptions" : [
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.1w_t6_1w",
        "features" : [

        ]
      },
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.1w_t10_1w",
        "features" : [

        ]
      },
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.1w_t6",
        "features" : [

        ]
      },
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.1w_t10",
        "features" : [

        ]
      },
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.1y_t80_1w",
        "features" : [

        ]
      },
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.1w_t6_bis",
        "features" : [

        ]
      },
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.1y_t80_1w_bis",
        "features" : [

        ]
      },
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.1w_t6_1w_bis",
        "features" : [

        ]
      },
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.1w_t4_1w",
        "features" : [

        ]
      },
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.1y_t70_1w",
        "features" : [

        ]
      }
    ],
    "non_consumables" : [
      {
        "status" : "APPROVED",
        "product_id" : "CinematographerKit"
      },
      {
        "status" : "APPROVED",
        "product_id" : "FilterPackAdamant"
      },
      {
        "status" : "APPROVED",
        "product_id" : "FilterPackCharcoal"
      },
      {
        "status" : "APPROVED",
        "product_id" : "FilterPackInfrared"
      },
      {
        "status" : "APPROVED",
        "product_id" : "FilterPackNovus"
      },
      {
        "status" : "APPROVED",
        "product_id" : "com.cinegenix.filmic.pro.filmic_standard_t15"
      }
    ]
  }
}



$done({body : JSON.stringify(chxm1023)});
