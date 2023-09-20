"use client";
import { Modal } from "@/components/ui/model";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className="p-4">
      <Modal
        isOpen
        onClose={() => {}}
        title={"Teste"}
        description={"Teste Descrição"}
      ></Modal>
    </div>
  );
}
