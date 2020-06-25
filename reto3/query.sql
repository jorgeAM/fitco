/**
Ingresos y deudas de membresias por subscripción
*/
select
sum(m.discount) as 'discountMembership',
sum(pl.price) as 'totalByPlan',
sum(i.total) as 'totalInvoice',
sum(p.total) as 'totalPayments',
sum(pl.price) - sum(m.discount) - sum(p.total) as 'totalDebt'
#sum(sslP.price) as 'paymentInStripe',
#sslP.paid as 'pagado'
from memberships m
#left join subscription_stripe_listPaid sslP on sslP.membershipId = m.id
inner join plans pl on pl.id = m.planId
inner join invoice_membership im on m.id = im.membershipId
inner join payment_invoice_membership pim on im.id = pim.invoiceMembershipId
inner join invoice i on im.invoiceId = i.id
inner join  payment p on pim.paymentId = p.id
where pl.typePayment = 1;




/**
Usuarios con membresia activa por subscripción limitada por una fecha
*/
select
count(distinct m.userEstablishmentId) as 'numOfActiveUserWithSubscription'
from memberships m
inner join plans pl on pl.id = m.planId
where pl.typePayment = 1 and
m.status = 1 and
m.endDate < '2020-03-20';