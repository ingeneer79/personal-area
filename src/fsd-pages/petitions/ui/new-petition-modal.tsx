import { RootState } from '@/app/store'
import { setNewPetitionModalOpen } from '@/entities/petitions/model/slice'
import { useAppSelector } from '@/shared/lib'
import CustomSearch from '@/shared/ui/custom/custom-search/custom-search'
import IconArrowRight from '@/shared/ui/icons/icon-arrow-right'
import IconClose from '@/shared/ui/icons/icon-close'
import { Button, Flex, Modal, Table, Typography } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const NewPetitionModal = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);



    const dispatch = useDispatch()
    const ModalState = useAppSelector((state: RootState) => state.petitionsStore.newPetitionModalOpen)

    const columns = [
        {
          title: "Номер накладной",
          dataIndex: "invoiceNumber",
          key: "invoiceNumber",
        },
        {
          title: "Адрес",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Дата",
          dataIndex: "date",
          key: "date",
        },
        {
          title: "Сумма",
          dataIndex: "amount",
          key: "amount",
        },
        {
          title: "Юр. лицо",
          dataIndex: "legalEntity",
          key: "legalEntity",
        },
      ];
    
      const data = [
        {
          key: "1",
          invoiceNumber: "MC121PO908832",
          address: "Москва, офис компании",
          date: "10.10.2024",
          amount: "100 000 ₽",
          legalEntity: "ООО Рога и Копыта",
        },
        {
          key: "2",
          invoiceNumber: "MC121PO908832",
          address: "Москва, офис компании",
          date: "10.10.2024",
          amount: "100 000 ₽",
          legalEntity: "ООО Рога и Копыта",
        },
        {
          key: "3",
          invoiceNumber: "MC121PO908832",
          address: "Москва, офис компании",
          date: "10.10.2024",
          amount: "100 000 ₽",
          legalEntity: "ООО Рога и Копыта",
        },
      ];
    
      const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
      };
    
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };

  return (
    <Modal
          width={"auto"}
          open={ModalState}
          onOk={() => dispatch(setNewPetitionModalOpen(false))}
          onCancel={() => dispatch(setNewPetitionModalOpen(false))}
          centered
          footer={[
            <Flex key="newPetitionModalFooter" style={{ justifyContent: "start", gap: 12 }}>
              <Button
                style={{ backgroundColor: "rgb(223, 90, 96)", color: "white" }}
                icon={<IconClose />}
                iconPosition="end"
                key="cancel"
                onClick={() => dispatch(setNewPetitionModalOpen(false))}
              >
                Отмена
              </Button>
              <Button
                style={{
                  backgroundColor: "rgb(134, 208, 175)",
                  color: "white",
                }}
                icon={<IconArrowRight />}
                iconPosition="end"
                key="submit"
                onClick={() => dispatch(setNewPetitionModalOpen(false))}
              >
                Далее
              </Button>
            </Flex>,
          ]}
        >
          <Typography
            style={{
              fontSize: "var(--size-text-2xl)",
              fontWeight: "var(--font-weight-text-semibold)",
              marginBottom: "16px",
            }}
          >
            Выберите накладную из списка
          </Typography>
          <CustomSearch placeholder="Поиск" />
          <Table
            className="new-petition-table"
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            pagination={false}
          />
        </Modal>
  )
}

export default NewPetitionModal