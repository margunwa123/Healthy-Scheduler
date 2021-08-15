import React, { FC, useEffect, useState } from 'react';
import PulseHelpButton from '@/components/PulseHelpButton';
import useLocalStorage from '@/hooks/useLocalStorage';
import Modal, { ModalProps } from '@/lib/Modal';
import Button from '@/lib/Button';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [hasSeenHelp, setHasSeenHelp] = useLocalStorage('has-seen-help', false);
  const [openHelpModal, setOpenHelpModal] = useState(false);

  const onHelpClicked = () => {
    console.log(openHelpModal);
    setHasSeenHelp(true);
    setOpenHelpModal(!openHelpModal);
  };

  useEffect(() => {
    if (!hasSeenHelp) {
      onHelpClicked();
    }
  }, []);

  return (
    <div className="relative">
      <img
        className="w-full object-cover object-bottom"
        style={{
          height: '140px',
        }}
        alt="hehe"
        src="/svg/header_wave.svg"
      />
      <div className="absolute top-0 left-0 w-full pt-8 lg:pt-4 pl-4 lg:pl-default font-bold ">
        <div className="flex space-x-8 text-xl lg:text-2xl items-center">
          <h1>Healthy Scheduler</h1>
          <PulseHelpButton
            hasSeenHelp={hasSeenHelp}
            onHelpClicked={onHelpClicked}
          />
        </div>
      </div>
      <HelpModal
        open={openHelpModal}
        onClickClose={() => setOpenHelpModal(false)}
      />
    </div>
  );
};

const HelpModal: FC<ModalProps> = ({ ...props }) => {
  return (
    <Modal title="Healthy Scheduler Guide" {...props}>
      <p id="description">
        Healthy scheduler adalah proyek iseng yang dibuat untuk menjadwalkan
        aktivitas berulang, misalnya stretching setiap jam 1,3,5, dan
        seterusnya. Hal ini ditujukan untuk membantu meningkatkan kesehatan,
        terutama bagi para developer atau orang yang biasanya berada di kantor
      </p>
      <p className="font-semibold mt-5 mb-3 text-xl">
        Cara menggunakan aplikasi
      </p>
      <ol className="list-decimal pl-5 space-y-2">
        <li>
          Buat activity group dengan menekan tombol "Add activity group" di
          homescreen
        </li>
        <li>
          Isi form sesuai dengan kebutuhan. Anda dapat mengkustomisasi warna
          sesuai keinginan (seperti trello)
        </li>
        <li>
          Setelah membuat grup, buatlah aktivitas dengna menekan tombol "+"
        </li>
        <li>
          Isi form aktivitas. Saat ini ada 2 tipe aktivitas, yaitu daily dan
          one-time. Daily berarti aktivitas yang berulang setiap hari di jam
          tertentu. Sementara one-time hanya dijalankan sekali
        </li>
        <li>
          Selesai! Anda telah berhasil membuat aktivitas, nanti akan ada alarm
          untuk mengingatkan bahwa anda telah selesai
        </li>
      </ol>
      <Button onClick={props.onClickClose} variant="success">
        Okay, paham!
      </Button>
    </Modal>
  );
};

export default Header;
