"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

type SubmitStatus = "idle" | "success" | "error";

export function CollectorSurveyForm({
  onSubmitted,
}: {
  onSubmitted?: () => void;
}) {
  const t = useTranslations("survey");

  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    companyName: "",
    fullName: "",
    email: "",
    phoneNumber: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Si el usuario selecciona "Not right now", llenar los campos personales con "N/A"
      const submissionData = {
        ...formData,
        companyName: formData.q7 === "notRightNow" ? "N/A" : formData.companyName,
        fullName: formData.q7 === "notRightNow" ? "N/A" : formData.fullName,
        email: formData.q7 === "notRightNow" ? "N/A" : formData.email,
        phoneNumber: formData.q7 === "notRightNow" ? "N/A" : formData.phoneNumber,
      };

      const response = await fetch("/api/survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error("Survey submission failed");
      }

      setSubmitStatus("success");
      setFormData({
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
        companyName: "",
        fullName: "",
        email: "",
        phoneNumber: "",
      });
      onSubmitted?.();
    } catch (error) {
      console.error("Survey submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t("q1.question")} <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {["monthly", "everyFewMonths", "onceAYearOrLess"].map(
            (option, index) => (
              <label
                key={option}
                className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  formData.q1 === option
                    ? "border-[#0C5F4C] bg-[#0C5F4C]/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-lg mr-4 font-semibold text-sm ${
                    formData.q1 === option
                      ? "bg-[#0C5F4C] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <input
                  type="radio"
                  name="q1"
                  value={option}
                  checked={formData.q1 === option}
                  onChange={(e) => handleChange("q1", e.target.value)}
                  className="hidden"
                  required
                />
                <span className="text-gray-900">
                  {t(`q1.options.${option}`)}
                </span>
              </label>
            )
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t("q2.question")} <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {["under10k", "10kTo50k", "50kTo250k", "250kTo500k", "over500k"].map(
            (option, index) => (
              <label
                key={option}
                className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                  formData.q2 === option
                    ? "border-[#0C5F4C] bg-[#0C5F4C]/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-lg mr-4 font-semibold text-sm ${
                    formData.q2 === option
                      ? "bg-[#0C5F4C] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {String.fromCharCode(65 + index)}
                </div>
                <input
                  type="radio"
                  name="q2"
                  value={option}
                  checked={formData.q2 === option}
                  onChange={(e) => handleChange("q2", e.target.value)}
                  className="hidden"
                  required
                />
                <span className="text-gray-900">
                  {t(`q2.options.${option}`)}
                </span>
              </label>
            )
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t("q3.question")} <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {["often", "sometimes", "never"].map((option, index) => (
            <label
              key={option}
              className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                formData.q3 === option
                  ? "border-[#0C5F4C] bg-[#0C5F4C]/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-lg mr-4 font-semibold text-sm ${
                  formData.q3 === option
                    ? "bg-[#0C5F4C] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <input
                type="radio"
                name="q3"
                value={option}
                checked={formData.q3 === option}
                onChange={(e) => handleChange("q3", e.target.value)}
                className="hidden"
                required
              />
              <span className="text-gray-900">{t(`q3.options.${option}`)}</span>
            </label>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t("q4.question")} <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {[
            "processComplexOrSlow",
            "highInterestRates",
            "didntKnowPossible",
            "didntWantToGiveUpPossession",
          ].map((option, index) => (
            <label
              key={option}
              className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                formData.q4 === option
                  ? "border-[#0C5F4C] bg-[#0C5F4C]/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-lg mr-4 font-semibold text-sm ${
                  formData.q4 === option
                    ? "bg-[#0C5F4C] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <input
                type="radio"
                name="q4"
                value={option}
                checked={formData.q4 === option}
                onChange={(e) => handleChange("q4", e.target.value)}
                className="hidden"
                required
              />
              <span className="text-gray-900">{t(`q4.options.${option}`)}</span>
            </label>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t("q5.question")} <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          {["1", "2", "3", "4", "5"].map((option, index) => (
            <label
              key={option}
              className={`flex-1 w-full sm:w-auto min-w-[60px] cursor-pointer transition-all`}
            >
              <input
                type="radio"
                name="q5"
                value={option}
                checked={formData.q5 === option}
                onChange={(e) => handleChange("q5", e.target.value)}
                className="hidden"
                required
              />
              <div
                className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${
                  formData.q5 === option
                    ? "border-[#0C5F4C] bg-[#0C5F4C] text-white"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                <span className="text-2xl font-bold">{index + 1}</span>
              </div>
            </label>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{t("q5.options.1")}</span>
          <span>{t("q5.options.5")}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t("q6.question")} <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          {["1", "2", "3", "4", "5"].map(
            (option, index) => (
              <label
                key={option}
                className={`flex-1 w-full sm:w-auto min-w-[60px] cursor-pointer transition-all`}
              >
                <input
                  type="radio"
                  name="q6"
                  value={option}
                  checked={formData.q6 === option}
                  onChange={(e) => handleChange("q6", e.target.value)}
                  className="hidden"
                  required
                />
                <div
                  className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl transition-all ${
                    formData.q6 === option
                      ? "border-[#0C5F4C] bg-[#0C5F4C] text-white"
                      : "border-gray-200 hover:border-gray-300 text-gray-700"
                  }`}
                >
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
              </label>
            )
          )}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{t("q6.options.1")}</span>
          <span>{t("q6.options.5")}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <label className="block text-lg font-medium text-gray-900 mb-4">
          {t("q7.question")} <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {["yesDefinitely", "notRightNow"].map((option, index) => (
            <label
              key={option}
              className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                formData.q7 === option
                  ? "border-[#0C5F4C] bg-[#0C5F4C]/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-lg mr-4 font-semibold text-sm ${
                  formData.q7 === option
                    ? "bg-[#0C5F4C] text-white"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {String.fromCharCode(65 + index)}
              </div>
              <input
                type="radio"
                name="q7"
                value={option}
                checked={formData.q7 === option}
                onChange={(e) => handleChange("q7", e.target.value)}
                className="hidden"
                required
              />
              <span className="text-gray-900">{t(`q7.options.${option}`)}</span>
            </label>
          ))}
        </div>
      </motion.div>

      {formData.q7 === "yesDefinitely" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              {t("fields.companyName")}
            </label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0C5F4C] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              {t("fields.fullName")} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0C5F4C] focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              {t("fields.email")} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              title="Please enter a valid email address"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0C5F4C] focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">
              {t("fields.phoneNumber")}
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">+</span>
              <input
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => {
                  let value = e.target.value;
                  // Allow numbers, spaces, and hyphens
                  value = value.replace(/[^\d\s-]/g, '');
                  handleChange("phoneNumber", value);
                }}
                placeholder="1 1234567890"
                className="w-full pl-8 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#0C5F4C] focus:border-transparent"
              />
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {t("fields.phoneHint")}
            </p>
          </div>
        </motion.div>
      )}

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">{t("messages.success")}</p>
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-medium">{t("messages.error")}</p>
        </div>
      )}

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-[#0C5F4C] text-white rounded-lg font-medium hover:bg-[#0A4F3E] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t("submitting") : `${t("submit")} →`}
        </button>
      </div>
    </form>
  );
}
